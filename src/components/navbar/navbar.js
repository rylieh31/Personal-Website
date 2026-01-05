import React from 'react';
import './navbar.css';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

<nav className="navbar">
  <div className="nav-brand">
    <Link to="/">
      <img src={logo} alt="RH logo" className="navbar-logo" />
    </Link>
  </div>
  <div className="navbar-right">
    <ul className="nav-links">
      <li>
        <a href="/about">About Me</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/experience">Experience</a>
      </li>
      <li>
        <a href="/education">Education</a>
      </li>
    
    </ul>
  </div>
</nav>
);
};

export default Navbar;
