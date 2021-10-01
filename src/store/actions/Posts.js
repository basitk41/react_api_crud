import axios from "axios";
import * as Actions from "../constants/Posts";
export const setPosts = (posts) => {
  return {
    type: Actions.SETPOSTS,
    posts,
  };
};
export const updatePost = (post) => {
  return {
    type: Actions.UPDATEPOST,
    post,
  };
};
export const addPost = (post) => {
  return {
    type: Actions.ADDPOST,
    post,
  };
};
export const deletePost = (id) => {
  return {
    type: Actions.DELETEPOST,
    id,
  };
};
export const loading = (bool) => {
  return {
    type: Actions.DELETEPOST,
    bool,
  };
};

export const initSearch = () => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        dispatch(loading(false));
      })
      .catch((error) => {
        console.log("Something went wrong!");
        console.log(error);
        dispatch(loading(false));
      });
  };
};
