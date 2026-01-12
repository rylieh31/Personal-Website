import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/Logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">
          <img src={logo} alt="RH logo" className="navbar-logo" />
        </NavLink>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;