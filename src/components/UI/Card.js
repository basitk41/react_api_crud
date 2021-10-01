import React from "react";
const Card = ({ post }) => {
  return (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{post.body}</p>
        </blockquote>
      </div>
    </div>
  );
};

export default Card;
