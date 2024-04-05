// PrivacySettings.js
import React from 'react';
import '../styles/blogCustomizationComponents.css';

const PrivacySettings = ({ privacyOptions, onSelectPrivacyOption }) => {
  return (
    <div className="privacy-settings">
      <h3>Privacy Settings</h3>
      <select onChange={(e) => onSelectPrivacyOption(e.target.value)}>
        {privacyOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrivacySettings;
