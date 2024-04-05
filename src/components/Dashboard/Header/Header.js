import React, { useState } from 'react';
import './header.css';
import useCurrentUser from '../../../hooks/useCurrentUser';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useCurrentUser();

  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="nav-group left">
          <a href="/">My Blogs</a>
          <a href="/about">About Us</a>
          <a href="/contact">Help</a>
        </div>
        <div className="nav-group right">
          <div>🔔</div>
          <div onClick={() => setIsOpen(!isOpen)}>{currentUser}</div>
        </div>
        {isOpen && (
            <div className="dropdown-menu">
              <a href="/profile">Profile</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
