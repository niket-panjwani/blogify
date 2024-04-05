import React from 'react';
import PostList from '../../components/BlogView/Post/PostList';
import AuthorBio from '../../components/BlogView/AuthorBio/AuthorBio';
import SocialSharing from '../../components/BlogView/SocialSharing/SocialSharing';
import './blogView.css';

const BlogView = () => {
  const blog = {
    title: "Tech Trends",
    description: "Exploring the latest in technology, programming, and innovation.",
    author: {
      name: "Jane Doe",
      bio: "Jane is a software developer with over 10 years of experience in the tech industry. She specializes in web development, machine learning, and blockchain technology."
    },
    posts: [
      {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Web development is rapidly evolving, with new frameworks and technologies emerging every year...",
        comments: [
          { id: 1, text: "Great article, really insightful!" },
          { id: 2, text: "Can't wait to see what the future holds." }
        ]
      },
      {
        id: 2,
        title: "Machine Learning and AI",
        excerpt: "Machine learning and artificial intelligence are transforming industries in unprecedented ways...",
        comments: [
          { id: 1, text: "AI is definitely the future of tech." },
          { id: 2, text: "Very informative, thanks for sharing." }
        ]
      },
      // Add more posts as needed
    ]
  };
  
  return (
    <div className="blog-view-page">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <PostList posts={blog.posts} />
      <AuthorBio author={blog.author} />
      <SocialSharing />
    </div>
  );
};

export default BlogView;
