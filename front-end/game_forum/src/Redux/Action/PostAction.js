import {
  getAllPost,
  createPost,
  deletePost,
  updatePost,
  pinPost,
  getAllPostByUserId,
} from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchListPostRedux = (postList) => {
  return {
    type: TYPES.FETCH_LIST_POST,
    payload: postList,
  };
};

export let actionFetchListPostAPI = (page) => {
  return (dispatch) => {
    return getAllPost(page).then((res) => {
      dispatch(actionFetchListPostRedux(res.content));
    });
  };
};

export let actionCreatePostAPI = (newPost) => {
  return (dispatch) => {
    return createPost(newPost).then((res) => {});
  };
};

export let actionDeletePostAPI = (id) => {
  return (dispatch) => {
    return deletePost(id).then((res) => dispatch(actionDeletePostRedux(id)));
  };
};

export let actionDeletePostRedux = (deletePostId) => {
  return {
    type: TYPES.FETCH_DELETE_POST,
    payload: deletePostId,
  };
};

export let actionUpdatePostAPI = (updatedPost) => {
  return (dispatch) => {
    return updatePost(updatedPost).then((res) => {});
  };
};

export let actionPinPostAPI = (pinPostOrder) => {
  return (dispatch) => {
    return pinPost(pinPostOrder).then((res) => {});
  };
};

export let actionFetchMyPostRedux = (postList) => {
  return {
    type: TYPES.FETCH_MY_POST,
    payload: postList,
  };
};

export let actionFetchMyPostAPI = (userId) => {
  return (dispatch) => {
    return getAllPostByUserId(userId).then((res) => {
      dispatch(actionFetchMyPostRedux(res));
    });
  };
};

export let actionDeleteMyPostAPI = (postId) => {
  return (dispatch) => {
    return deletePost(postId).then((res) =>
      dispatch(actionDeletePostRedux(postId))
    );
  };
};

export let actionDeleteMyPostRedux = (deletePostId) => {
  return {
    type: TYPES.FETCH_DELETE_MY_POST,
    payload: deletePostId,
  };
};
