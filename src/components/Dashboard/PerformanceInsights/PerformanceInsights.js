import React from 'react';
import './performanceInsights.css'; // Importing the CSS file for styling

const PerformanceInsights = ({ insights }) => {
  return (
    <div className="performance-insights">
      <h3>Performance Insights</h3>
      <div className="insight-section">
        <h4>Most Popular Posts</h4>
        <ul>
          {insights.mostPopularPosts.map((post, index) => (
            <li key={index}>{post.title} - {post.views} views</li>
          ))}
        </ul>
      </div>
      <div className="insight-section">
        <h4>Suggestions for Improvement</h4>
        <p>{insights.improvementTip}</p>
      </div>
    </div>
  );
};

export default PerformanceInsights;
