import React, { useEffect, useState } from 'react';
import './quickStats.css'; 
import { fetchUserStats } from '../../../service/api'; 

const QuickStats = () => {

  const [stats, setStats] = useState({}); // use useState here
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStats = await fetchUserStats(); // store result in a new variable
        console.log('Fetched stats:', fetchedStats);
        setStats(fetchedStats); // update state with new value
      } catch (error) {
        console.error('Failed to fetch user stats', error);
      } 
    };
    fetchData();
  }, []);

  return (
    <div className="quick-stats">
      <h3>Quick Stats</h3>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-value">{stats.page_views}</span>
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
          <span className="stat-value">{stats.engagement_rate}%</span>
          <span className="stat-label">Engagement Rate</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
