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
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post/add" component={NewPost} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/post/update/:id" component={UpdatePost} />
        <Redirect from="/" to="/posts" />
      </Switch>
    </>
  );
};

export default Routes;
