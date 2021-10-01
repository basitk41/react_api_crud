import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
const Posts = () => {
  return <h1>Posts</h1>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
