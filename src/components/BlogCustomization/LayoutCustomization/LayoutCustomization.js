// LayoutCustomization.js
import React from 'react';
import '../styles/blogCustomizationComponents.css';

const LayoutCustomization = ({ layoutOptions, onSelectLayout }) => {
  return (
    <div className="layout-customization">
      <h3>Customize Layout</h3>
      <div className="layout-options">
        {layoutOptions.map((option) => (
          <button key={option.id} onClick={() => onSelectLayout(option.id)}>
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LayoutCustomization;
