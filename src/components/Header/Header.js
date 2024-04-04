import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="nav-group left">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-group right">
          <a href="/login">Log In</a>
          <a href="/signup" className="signup-btn">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
