import React from "react";
import { Link } from "react-router-dom";
const List = ({ post, deletePost }) => {
  return (
    <div className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>
          {`${post.id})  `}
          {post.title}
        </Link>
        <span
          class="badge bg-danger rounded-pill"
          style={{ cursor: "pointer" }}
          onClick={(e) => deletePost(post.id)}
        >
          X
        </span>
      </li>
    </div>
  );
};

export default List;
