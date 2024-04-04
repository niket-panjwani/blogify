import React from 'react';
import './quickStats.css'; // Importing the CSS file for styling

const QuickStats = ({ stats }) => {
  return (
    <div className="quick-stats">
      <h3>Quick Stats</h3>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-value">{stats.pageViews}</span>
          <span className="stat-label">Page Views</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.comments}</span>
          <span className="stat-label">Comments</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.engagementRate}%</span>
          <span className="stat-label">Engagement Rate</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
