import * as Actions from "../actions/Posts";
export const mapStateToProps = (state) => {
  return {};
};
export const mapDispatchToProps = (dispatch) => {
  return {
    initPosts: () => dispatch(Actions.initSearch()),
  };
};
