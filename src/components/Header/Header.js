import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/posts">
          Posts
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/post/add">
          Add New Post
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
