import React from 'react';
import './features.css';

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Set up your blog in minutes with our easy-to-navigate platform.</p>
        </div>
        <div className="feature">
          <h3>Customizable</h3>
          <p>Choose from a variety of themes to make your blog truly yours.</p>
        </div>
        <div className="feature">
          <h3>Connect with Others</h3>
          <p>Engage with your audience through comments and social media integration.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;