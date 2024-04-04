import React from 'react';
import './resourceTips.css'; // Importing the CSS file for styling

const ResourcesTips = ({ tips, updates }) => {
  return (
    <div className="resources-tips">
      <div className="tips-section">
        <h3>Blogging Tips</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div className="updates-section">
        <h3>Platform Updates</h3>
        <ul>
          {updates.map((update, index) => (
            <li key={index}>{update}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourcesTips;
