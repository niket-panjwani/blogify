import React from 'react';
import './footer.css'; // Importing the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <a href="/about">About Us</a>
        <a href="/support">Support</a>
        <a href="/forums">Community Forums</a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram-icon.png" alt="Instagram" />
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
