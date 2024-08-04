import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../image/logo.png'; // Logo image import karein

const Nav = styled.nav`
  background: #000; /* Majestic black */
  color: #fff; /* White text */
  height: 60px; /* Fixed height for desktop view */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;

  @media (max-width: 768px) {
    height: 60px; /* Adjust height for mobile view */
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #f0f0f0; /* Slightly lighter text color on hover */
    transform: scale(1.1);
  }
`;

const Logo = styled.img`
  height: 50px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: transparent;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    background-color: #fff;
    height: 3px;
    width: 25px;
    margin: 3px 0;
    transition: 0.3s;
  }

  &.open div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;

const Offcanvas = styled.div`
  position: fixed;
  top: 60px; /* Start below the navbar */
  right: 0;
  width: 250px; /* Slightly narrower width */
  height: calc(100% - 60px); /* Adjust height to fill the remaining space */
  background: var(--offcanvas-bg, #000); /* Use CSS variable */
  color: var(--offcanvas-text, #fff); /* Use CSS variable */
  transform: ${({ $show }) => ($show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  z-index: 1000; /* Ensure offcanvas is below hamburger but above other content */
  box-shadow: ${({ $show }) => ($show ? '0 4px 8px rgba(0, 0, 0, 0.5)' : 'none')}; /* Shadow on open */
  border-radius: 8px 0 0 8px; /* Rounded corners on left side */

  @media (max-width: 768px) {
    width: 200px; /* Adjust width for mobile view */
  }

  .offcanvas-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid var(--border-color, #444); /* Use CSS variable */
    background: var(--header-bg, #333); /* Background for header */
  }

  .offcanvas-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: block;
    padding: 10px 0;
    color: var(--link-color, #fff); /* Use CSS variable */
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--link-hover-color, #f0f0f0); /* Use CSS variable */
      text-decoration: underline; /* Optional: add underline on hover */
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/endsem">Semester</NavLink>
        </NavLinks>
        <Hamburger className={menuOpen ? 'open' : ''} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
      </Nav>

      <Offcanvas $show={menuOpen}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button type="button" className="btn-close" onClick={toggleMenu}></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/endsem" onClick={() => setMenuOpen(false)}>Semester</Link>
            </li>
          </ul>
        </div>
      </Offcanvas>
    </>
  );
};

export default Navbar;
