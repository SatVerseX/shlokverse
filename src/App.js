import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './page1-components/Navbar.js';
import Page1 from './page1-components/page1.js';
import About from './about-page/about.js';
import Service from './service-page/service.js';
import Semester from './semester-page/semester.js';
import Contact from './contact/contact.js';
import Redirect from './Redirect.js'; // Import Redirect component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Navbar component ko use kiya */}
      <Redirect /> {/* Redirect component ko add kiya */}
      <Routes>
        <Route path="/shlokverse" element={<Page1 />} />
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/endsem" element={<Semester />} />
      </Routes>
    </div>
  );
}

export default App;
