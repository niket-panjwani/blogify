import React from 'react';
import CommentSection from '../Comment/CommentSection';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <CommentSection comments={post.comments} />
    </div>
  );
};

export default PostItem;
