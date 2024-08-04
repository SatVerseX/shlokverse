import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './page1-components/Navbar.js';
import Page1 from './page1-components/page1.js';
import About from './about-page/about.js';
import Service from './service-page/service.js';
import Semester from './semester-page/semester.js';
import Contact from './contact/contact.js';
import Redirect from './Redirect.js';
import TicTacToe from './service-page/tictactoe.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Redirect />
      <Routes>
        <Route path="/shlokverse" element={<Page1 />} />
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/endsem" element={<Semester />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;
