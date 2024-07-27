// src/App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-bottom'>
        <ul className='nav-menu'>
          <li><Link to="/"><img src='https://preview.colorlib.com/theme/charityworks/assets/img/logo/logo.png' alt='Logo'/></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/causes">Latest Causes</Link></li>
          <li><Link to="/events">Social Event</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className='donate-button'>Donate</button>
      </div>
    </header>
  );
};

export default Header;
