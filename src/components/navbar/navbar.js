import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">
          <img src={logo} alt="RH logo" className="navbar-logo" />
        </NavLink>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>
              Education
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
