import React from 'react';

const AuthorBio = ({ author }) => {
  return (
    <div className="author-bio">
      <h3>About the Author</h3>
      <p>{author.bio}</p>
    </div>
  );
};

export default AuthorBio;
