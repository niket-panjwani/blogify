import React from 'react';
import './welcome.css'; // Importing the CSS file for styling

const Welcome = ({ username }) => {
  return (
    <div className="welcome-section">
      <h2 className="greeting">Welcome, {username}!</h2>
      <button className="create-post-btn">niketpanjwani.blogify.com</button>
    </div>
  );
};

export default Welcome;
