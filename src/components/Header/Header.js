import React, { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../config/Auth/AuthContext';

function Header() {
  const user = useContext(AuthContext);

  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="nav-group left">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-group right">
          {!user &&
            <>
              <a href="/login">Log In</a>
              <a href="/signup" className="signup-btn">Sign Up</a>
            </>
          }
          {
            user &&
            <>
              <div>{user.displayName}</div>
            </>
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
