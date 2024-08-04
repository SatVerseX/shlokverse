import React from 'react';
import { useNavigate } from 'react-router-dom';
import './service.css'; // Import the CSS file
import TicTacToeImage from '../image/tictactoe.png';

const Service = () => {
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    navigate("/tictactoe");
  };

  return (
    <div className="container1">
      <img src={TicTacToeImage} alt="Tic-Tac-Toe" className="service-image" />
      <h2 className="service-heading">Tic-Tac-Toe Game</h2>
      <button className="play-button" onClick={handlePlayButtonClick}>Play</button>
    </div>
  );
};

export default Service;
