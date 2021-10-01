import React, { useEffect } from "react";
import { connect } from "react-redux";
import Routes from "./utils/Routes/Routes";
import { mapDispatchToProps, mapStateToProps } from "./store/helper/Posts";

const App = ({ initPosts }) => {
  useEffect(() => {
    initPosts();
  }, [initPosts]);
  return (
    <div className="container mt-3">
      <Routes />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
