import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './tictactoe.css';
import Notification from './Notification';

/* Sound creation function */
// const createSound = (path) => {
//   const audio = new Audio(path);
//   audio.onerror = () => console.error(`Error loading audio file: ${path}`);
//   return audio;
// };

// /* Sound files */
// const sounds = {
//   click: createSound('/364929__jofae__game-die.mp3'),
//   win: createSound('/391539__unlistenable__electro-win-sound.wav'),
//   draw: createSound('/684747__robhog__drawing-sword-sound-01.wav'),
// };

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [mode, setMode] = useState('player');
  const [computerPlaying, setComputerPlaying] = useState(false);

  const checkWinnerForMinimax = useCallback((squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }, []);

  const checkWinner = useCallback((squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        // sounds.win.play();
        return;
      }
    }
    if (!squares.includes(null)) {
      setWinner('Draw');
      // sounds.draw.play();
    }
  }, []);

  const handleClick = useCallback((index) => {
    if (board[index] || winner) return;
    if (mode === 'computer' && computerPlaying && isXNext) return;

    // sounds.click.play();

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);

    if (mode === 'computer' && !isXNext && !computerPlaying) {
      setComputerPlaying(true);
    }
  }, [board, isXNext, winner, computerPlaying, mode, checkWinner]);

  const minimax = useCallback((newBoard, isMaximizing) => {
    const emptyIndices = newBoard.map((value, index) => value === null ? index : null).filter(index => index !== null);
    const winner = checkWinnerForMinimax(newBoard);

    if (winner === 'X') return { score: -10 };
    if (winner === 'O') return { score: 10 };
    if (emptyIndices.length === 0) return { score: 0 };

    let bestMove;
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const index of emptyIndices) {
        newBoard[index] = 'O';
        let { score } = minimax(newBoard, false);
        newBoard[index] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = index;
        }
      }
      return { score: bestScore, move: bestMove };
    } else {
      let bestScore = Infinity;
      for (const index of emptyIndices) {
        newBoard[index] = 'X';
        let { score } = minimax(newBoard, true);
        newBoard[index] = null;
        if (score < bestScore) {
          bestScore = score;
          bestMove = index;
        }
      }
      return { score: bestScore, move: bestMove };
    }
  }, [checkWinnerForMinimax]);

  const computerMove = useCallback(() => {
    if (mode === 'computer' && computerPlaying) {
      const { move } = minimax(board, true);
      handleClick(move);
      setComputerPlaying(false);
    }
  }, [board, handleClick, mode, minimax, computerPlaying]);

  useEffect(() => {
    if (mode === 'computer' && !isXNext && !winner && board.includes(null)) {
      setComputerPlaying(true);
    }
  }, [mode, isXNext, winner, board]);

  useEffect(() => {
    if (computerPlaying) {
      const timer = setTimeout(() => {
        computerMove();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [computerPlaying, computerMove]);

  const renderSquare = (index) => (
    <motion.button
      key={index}
      className={`square ${board[index] ? 'filled' : ''}`}
      onClick={() => handleClick(index)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      aria-label={`Square ${index + 1}`}
      aria-disabled={!!board[index]}
    >
      {board[index]}
    </motion.button>
  );

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setComputerPlaying(false);
  };

  const status = winner ? (winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`) : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <motion.div
      className="game"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mode-selection">
        <motion.button
          className={`mode-button ${mode === 'player' ? 'active' : ''}`}
          onClick={() => setMode('player')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Player vs Player
        </motion.button>
        <motion.button
          className={`mode-button ${mode === 'computer' ? 'active' : ''}`}
          onClick={() => setMode('computer')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Player vs Computer
        </motion.button>
      </div>
      <div className="status" role="status">{status}</div>
      <motion.div
        className="board"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
        </AnimatePresence>
      </motion.div>
      <div className="button-container">
        <motion.button
          className="restart-button"
          onClick={restartGame}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Restart Game
        </motion.button>
      </div>
      {winner && <Notification message={winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`} type={winner === 'Draw' ? 'info' : 'success'} />}
    </motion.div>
  );
};

export default TicTacToe;
