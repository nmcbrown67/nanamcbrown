import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar_links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        {/* <li><Link to="/projects">Projects</Link></li> */}
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;