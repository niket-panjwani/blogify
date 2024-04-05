import React, { useContext, useEffect } from 'react';
import Header from '../../components/Dashboard/Header/Header';
import { useNavigate } from 'react-router-dom';
import Welcome from '../../components/Dashboard/Welcome/Welcome';
import QuickStats from '../../components/Dashboard/QuickStats/QuickStats';
import RecentPostsAndDrafts from '../../components/Dashboard/RecentPostsAndDrafts/RecentPostsAndDrafts';
import PerformanceInsights from '../../components/Dashboard/PerformanceInsights/PerformanceInsights';
import QuickLinks from '../../components/Dashboard/QuickLinks/QuickLinks';
import ResourceTips from '../../components/Dashboard/ResourceTips/ResourceTips';
import Footer from '../../components/Dashboard/Footer/Footer';
import './dashboard.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Dashboard() {
  //const navigate = useNavigate();
  
  const stats = {
    pageViews: 1500,
    comments: 120,
    followers: 350,
    engagementRate: 4.7,
  };

  const recentPosts = [
    { title: 'Post 1', excerpt: 'This is an excerpt from post 1...' },
    { title: 'Post 2', excerpt: 'This is an excerpt from post 2...' },
  ];

  const drafts = [
    { title: 'Draft 1' },
    { title: 'Draft 2' },
  ];

  const insights = {
    mostPopularPosts: [
      { title: 'Understanding React Hooks', views: 1200 },
      { title: 'Introduction to Serverless Architecture', views: 950 },
      // More posts
    ],
    improvementTip: 'Consider focusing your next posts on trending topics in technology to boost engagement.'
  };

  const tips = [
    "Engage with your readers through comments.",
    "Use keywords effectively for SEO.",
    // More tips
  ];

  const updates = [
    "New feature: Customizable themes!",
    "Update: Improved post editor.",
    // More updates
  ];

  return (
    <div className="dashboard">
      <Header/>
      <Welcome username='Niket Panjwani' />
      <QuickStats stats={stats} />
      <RecentPostsAndDrafts recentPosts={recentPosts} drafts={drafts} />
      <PerformanceInsights insights={insights} />
      <QuickLinks />
      <ResourceTips tips={tips} updates={updates} />
      <Footer />
    </div>
  );
}

export default withAuthenticator(Dashboard);