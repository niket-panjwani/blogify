// DomainSettings.js
import React, { useState } from 'react';
import '../styles/blogCustomizationComponents.css';

const DomainSettings = ({ onSaveDomain }) => {
  const [domain, setDomain] = useState('');

  return (
    <div className="domain-settings">
      <h3>Domain Settings</h3>
      <input
        type="text"
        placeholder="Your custom domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button onClick={() => onSaveDomain(domain)}>Save Domain</button>
    </div>
  );
};

export default DomainSettings;
