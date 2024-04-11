import React from 'react';
import './Dash.css'; // Assuming you have a CSS file for styling

// Dashboard Header Component
const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <h1>Dashboard</h1>
      <input type="search" placeholder="Search..." />
    </header>
  );
};

// Summary Card Component
const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

// Blog Post Row Component
const BlogPostRow = ({ image, title, status, comments }) => {
  return (
    <tr className="blog-post-row">
      <td><div className="image-placeholder">{image}</div></td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{comments}</td>
      <td>
        <button className="edit-button">✏️</button>
        <button className="delete-button">🗑️</button>
      </td>
    </tr>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  // Dummy data for illustration
  const summaryData = {
    totalPosts: 120,
    totalComments: 450,
    userEngagement: '75%'
  };

  const blogPosts = [
    { id: 1, image: '', title: 'Blog Post 1', status: 'Published', comments: 50 },
    { id: 2, image: '', title: 'Blog Post 2', status: 'Draft', comments: 20 },
    // More blog posts...
  ];

  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <div className="summary-section">
        <SummaryCard title="Total Blog Posts" value={summaryData.totalPosts} />
        <SummaryCard title="Total Comments" value={summaryData.totalComments} />
        <SummaryCard title="User Engagement" value={summaryData.userEngagement} />
      </div>
      <table className="blog-posts-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map(post => (
            <BlogPostRow
              key={post.id}
              image={post.image}
              title={post.title}
              status={post.status}
              comments={post.comments}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
