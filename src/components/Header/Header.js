import React from "react";
const Header = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href>
          Posts
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href>
          Add New Post
        </a>
      </li>
    </ul>
  );
};

export default Header;
