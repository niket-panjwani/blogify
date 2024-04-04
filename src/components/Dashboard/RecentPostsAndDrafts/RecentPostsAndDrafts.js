import React from 'react';
import './recentPostsAndDrafts.css'; // Importing the CSS file for styling

const RecentPostsAndDrafts = ({ recentPosts, drafts }) => {
  return (
    <div className="recent-posts-drafts">
      <section className="recent-posts">
        <h3>Recent Posts</h3>
        <ul>
          {recentPosts.map((post, index) => (
            <li key={index}>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <div className="actions">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="drafts">
        <h3>Drafts</h3>
        <ul>
          {drafts.map((draft, index) => (
            <li key={index}>
              <h4>{draft.title}</h4>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RecentPostsAndDrafts;
