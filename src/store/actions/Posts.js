import axios from "axios";
import * as Constants from "../constants/Posts";
import { error, success } from "../../utils/Toast/Toast";
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
    type: Constants.LOADING,
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
export const set_Post = (id) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        dispatch(setPost(response.data));
        dispatch(loading(false));
      })
      .catch((error) => {
        console.log("Something went wrong!");
        console.log(error);
        dispatch(loading(false));
      });
  };
};
export const add_Post = (post, history) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, post, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        dispatch(addPost(response.data));
        dispatch(loading(false));
        history.push("/posts");
        success("Post added.");
      })
      .catch((err) => {
        console.log("Something went wrong!");
        console.log(err);
        dispatch(loading(false));
        error("Error while adding post.");
      });
  };
};
export const delete_Post = (id) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        dispatch(deletePost(id));
        dispatch(loading(false));
        success("Post deleted.");
      })
      .catch((err) => {
        console.log("Something went wrong!");
        console.log(err);
        dispatch(loading(false));
        error("Error while deleting post.");
      });
  };
};
