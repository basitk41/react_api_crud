import * as Actions from "../actions/Posts";
export const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    userId: state.posts.userId,
    post: state.posts.post,
    postId: state.posts.postId,
    loading: state.posts.loading,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    initPosts: () => dispatch(Actions.initSearch()),
    setPost: (id) => dispatch(Actions.set_Post(id)),
    addPost: (post, history) => dispatch(Actions.add_Post(post, history)),
    deletePost: (id) => dispatch(Actions.delete_Post(id)),
  };
};
