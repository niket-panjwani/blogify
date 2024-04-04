import React from 'react';
import './hero.css';

function HeroSection() {
  return (
    <section className="hero">
      <h1>Welcome to Your Blogging Platform</h1>
      <p>Start your own blog, reach your audience, and share your ideas with the world.</p>
      <a href="/signup" className="cta-btn">Get Started</a>
    </section>
  );
}

export default HeroSection;