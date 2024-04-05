import React, { useState } from 'react';
import ThemeSelector from '../../components/BlogCustomization/ThemeSelector/ThemeSelector';
import LayoutCustomization from '../../components/BlogCustomization/LayoutCustomization/LayoutCustomization';
import DomainSettings from '../../components/BlogCustomization/DomainSettings/DomainSettings';
import SEOSettings from '../../components/BlogCustomization/SEOSettings/SEOSettings';
import SocialMediaIntegration from '../../components/BlogCustomization/SocialMediaIntegration/SocialMediaIntegration';
import PrivacySettings from '../../components/BlogCustomization/PrivacySettings/PrivacySettings';
import './blogCustomization.css';

const BlogCustomization = () => {

  const [themes] = useState([
    { id: 'theme1', name: 'Theme 1', thumbnail: '/path/to/image1.png' },
    { id: 'theme2', name: 'Theme 2', thumbnail: '/path/to/image1.png' },
    { id: 'theme3', name: 'Theme 3', thumbnail: '/path/to/image1.png' },
  ]);

  const layoutOptions = [
    { id: 1, name: 'Layout 1' },
    { id: 2, name: 'Layout 2' },
    { id: 3, name: 'Layout 3' },
  ];

  const privacyOptions = [
    { id: 'public', label: 'Public', value: 'public' },
    { id: 'private', label: 'Private', value: 'private' },
  ];

  return (
    <div className="blog-customization-page">
      <h2>Blog Customization</h2>
      <ThemeSelector themes={themes} onSelectTheme={(themeId) => console.log(themeId)}/>
      <LayoutCustomization layoutOptions={layoutOptions} onSelectLayout={(id) => console.log(`Selected layout: ${id}`)}/>
      <DomainSettings />
      <SEOSettings />
      <SocialMediaIntegration />
      <PrivacySettings privacyOptions={privacyOptions} onSelectPrivacyOption={(value) => console.log(value)} />
    </div>
  );
};

export default BlogCustomization;
