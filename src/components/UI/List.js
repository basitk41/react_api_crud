import React from "react";
import { Link } from "react-router-dom";
const List = ({ post }) => {
  return (
    <div className="list-group">
      <Link
        className="list-group-item list-group-item-action"
        to={`/post/${post.id}`}
      >
        {post.title}
      </Link>
    </div>
  );
};

export default List;
