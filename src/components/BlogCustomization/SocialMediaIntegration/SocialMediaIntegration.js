// SocialMediaIntegration.js
import React, { useState } from 'react';
import '../styles/blogCustomizationComponents.css';

const SocialMediaIntegration = ({ onSaveSocialMedia }) => {
  const [socialLinks, setSocialLinks] = useState({ facebook: '', twitter: '', instagram: '' });

  const updateLink = (platform, value) => {
    setSocialLinks((prevLinks) => ({ ...prevLinks, [platform]: value }));
  };

  return (
    <div className="social-media-integration">
      <h3>Social Media Integration</h3>
      <input
        type="text"
        placeholder="Facebook Link"
        value={socialLinks.facebook}
        onChange={(e) => updateLink('facebook', e.target.value)}
      />
      <input
        type="text"
        placeholder="Twitter Link"
        value={socialLinks.twitter}
        onChange={(e) => updateLink('twitter', e.target.value)}
      />
      <input
        type="text"
        placeholder="Instagram Link"
        value={socialLinks.instagram}
        onChange={(e) => updateLink('instagram', e.target.value)}
      />
      <button onClick={() => onSaveSocialMedia(socialLinks)}>Save Links</button>
    </div>
  );
};

export default SocialMediaIntegration;
