import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
import List from "../UI/List";
const Posts = ({ initPosts, posts }) => {
  useEffect(() => {
    initPosts();
  }, [initPosts]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      {posts.map((post) => (
        <List key={post.id} post={post} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
