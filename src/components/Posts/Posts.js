import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/helper/Posts";
import List from "../UI/List";
import Spinner from "../UI/Spinner";
const Posts = ({ initPosts, posts, loading }) => {
  useEffect(() => {
    initPosts();
  }, [initPosts]);
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
