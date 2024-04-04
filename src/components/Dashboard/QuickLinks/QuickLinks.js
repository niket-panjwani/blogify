import React from 'react';
import './quickLinks.css'; // Importing the CSS file for styling

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li><button onClick={() => alert('Navigate to Blog Customization')}>Blog Customization</button></li>
        <li><button onClick={() => alert('Navigate to Domain Management')}>Domain Management</button></li>
        <li><button onClick={() => alert('Navigate to Privacy Settings')}>Privacy Settings</button></li>
      </ul>
    </div>
  );
};

export default QuickLinks;
