import React, { useContext, useEffect } from 'react';
import Header from '../../components/Dashboard/Header/Header';
import { AuthContext } from '../../config/Auth/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard({ userBlogs = [] }) {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="dashboard">
      <Header/>
      <h1>My Blogs</h1>
      <div className="blog-list">
        {userBlogs.length > 0 ? (
          userBlogs.map((blog) => (
            <div key={blog.id} className="blog-preview">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link to={`/edit/${blog.id}`} className="edit-link">Edit Blog</Link>
            </div>
          ))
        ) : (
          <p>You haven't created any blogs yet.</p>
        )}
      </div>
      <div className="create-new-blog">
        <Link to="/create" className="create-btn">Create New Blog</Link>
      </div>
    </div>
  );
}

export default Dashboard;
