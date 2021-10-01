import axios from "axios";
import * as Constants from "../constants/Posts";
export const setPosts = (posts) => {
  return {
    type: Constants.SETPOSTS,
    posts,
  };
};
export const setPost = (post) => {
  return {
    type: Constants.SETPOST,
    post,
  };
};
export const setPostId = (postId) => {
  return {
    type: Constants.SETPOSTID,
    postId,
  };
};
export const updatePost = (post) => {
  return {
    type: Constants.UPDATEPOST,
    post,
  };
};
export const addPost = (post) => {
  return {
    type: Constants.ADDPOST,
    post,
  };
};
export const deletePost = (id) => {
  return {
    type: Constants.DELETEPOST,
    id,
  };
};
export const loading = (bool) => {
  return {
    type: Constants.DELETEPOST,
    bool,
  };
};

export const initSearch = () => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        dispatch(setPosts(response.data));
        dispatch(loading(false));
      })
      .catch((error) => {
        console.log("Something went wrong!");
        console.log(error);
        dispatch(loading(false));
      });
  };
};
