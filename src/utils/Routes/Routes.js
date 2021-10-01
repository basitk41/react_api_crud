import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Post from "../../components/Posts/Post";
import UpdatePost from "../../components/Posts/UpdatePost";
import NewPost from "../../components/Posts/NewPost";
import { Route, Redirect, Switch } from "react-router-dom";
const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />
        <Route path="/post/update/:id" component={UpdatePost} />
        <Route path="/post/add" component={NewPost} />
        <Redirect from="/" to="/posts" />
      </Switch>
    </>
  );
};

export default Routes;
