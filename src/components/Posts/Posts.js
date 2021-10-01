import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
import List from "../UI/List";
import Spinner from "../UI/Spinner";
const Posts = ({ posts, loading }) => {
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        posts.map((post) => <List key={post.id} post={post} />)
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
