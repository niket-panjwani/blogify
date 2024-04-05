import React from 'react';

const CommentsSection = ({ comments }) => {
  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <p key={index}>{comment.text}</p>
      ))}
    </div>
  );
};

export default CommentsSection;
