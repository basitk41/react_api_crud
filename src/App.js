import React, { useEffect } from "react";
import { connect } from "react-redux";
import Routes from "./utils/Routes/Routes";
import { mapDispatchToProps, mapStateToProps } from "./store/helper/Posts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ initPosts }) => {
  useEffect(() => {
    initPosts();
  }, [initPosts]);
  return (
    <div className="container mt-3">
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
