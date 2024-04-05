// SEOSettings.js
import React, { useState } from 'react';
import '../styles/blogCustomizationComponents.css';

const SEOSettings = ({ onSaveSEO }) => {
  const [metaDescription, setMetaDescription] = useState('');

  return (
    <div className="seo-settings">
      <h3>SEO Settings</h3>
      <textarea
        placeholder="Meta Description"
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
      ></textarea>
      <button onClick={() => onSaveSEO(metaDescription)}>Save Settings</button>
    </div>
  );
};

export default SEOSettings;
