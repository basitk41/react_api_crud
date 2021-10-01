import * as Constants from "../constants/Posts";
const initialState = {
  posts: [],
  userId: 1,
  post: {},
  postId: "",
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SETPOSTS:
      return {
        ...state,
        posts: [...action.posts],
      };
    case Constants.SETPOST:
      return {
        ...state,
        post: action.post,
      };
    case Constants.SETPOSTID:
      return {
        ...state,
        postId: action.postId,
      };
    case Constants.ADDPOST:
      const posts_1 = [...state.posts];
      posts_1.push(action.post);
      return {
        ...state,
        posts: [...posts_1],
      };
    case Constants.UPDATEPOST:
      const posts_2 = [...state.posts];
      const index = posts_2.findIndex((post) => post.id === state.postId);
      if (index > -1) posts_2.splice(index, 1, action.post);
      return {
        ...state,
        posts: [...posts_2],
      };
    case Constants.DELETEPOST:
      const posts_3 = [...state.posts];
      return {
        ...state,
        posts: [...posts_3.filter((post) => post.id !== action.id)],
      };
    case Constants.LOADING:
      return {
        ...state,
        loading: action.bool,
      };
    default:
      return state;
  }
};
export default Reducer;
