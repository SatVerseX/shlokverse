// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './page1-components/Navbar.js'; // Navbar ko import kiya
//import Body from './page1-components/body.js'; // Body ko import kiya
import Page1 from './page1-components/page1.js';
import About from './about-page/about.js';
import Service from './service-page/service.js';
import Semester from './semester-page/semester.js';
import Contact from './contact/contact.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar component ko use kiya */}
        <Routes>
          <Route path="/shlokverse" element={<Page1/>}/>
          <Route path="/" element={<Page1 />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/endsem" element={<Semester/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
