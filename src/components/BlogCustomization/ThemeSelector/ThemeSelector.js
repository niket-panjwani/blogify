// ThemeSelector.js
import React from 'react';
import '../styles/blogCustomizationComponents.css';

const ThemeSelector = ({ themes, onSelectTheme }) => {
  return (
    <div className="theme-selector">
      <h3>Select Theme</h3>
      <div className="themes-list">
        {themes.map((theme) => (
          <div key={theme.id} className="theme-item" onClick={() => onSelectTheme(theme.id)}>
            <img src={theme.thumbnail} alt={theme.name} className="theme-thumbnail" />
            <span>{theme.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
