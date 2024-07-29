import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../image/_431c29bf-6070-4a14-be41-d40b3b4dc8dd.jpeg'; // Logo image import karein

const Nav = styled.nav`
  background: linear-gradient(135deg, #4a90e2, #f06);
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
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
    color: #f0f0f0;
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

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
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

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 60px;
  right: 20px;
  background: #4a90e2;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: max-height 0.3s ease-in-out;

  &.open {
    display: block;
  }

  a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #f06;
    }
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
      <MobileMenu className={menuOpen ? 'open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/endsem">Semester</Link>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
