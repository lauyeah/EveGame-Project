import {
  createComment,
  getCommentByPostId,
  deleteCommentById,
  getPostCommentCount,
} from "../../Api/CommentApi";
import * as TYPES from "../Contant/ActionType";

export let actionFetchPostCommentAPI = (postId) => {
  return (dispatch) => {
    return getCommentByPostId(postId).then((res) => {
      dispatch(actionFetchPostCommentRedux(res));
    });
  };
};

export let actionFetchPostCommentRedux = (commentList) => {
  return {
    type: TYPES.FETCH_POST_COMMENT,
    payload: commentList,
  };
};

export let actionCreateCommentAPI = (comment) => {
  return (dispatch) => {
    return createComment(comment).then((res) => {});
  };
};

export let actionDeleteCommentAPI = (commentId) => {
  return (dispatch) => {
    return deleteCommentById(commentId).then((res) => {});
  };
};

export let actionFetchCommentCountRedux = (cmtCount) => {
  return {
    type: TYPES.FETCH_COMMENT_COUNT,
    payload: cmtCount,
  };
};

export let actionFetchCommentCountAPI = (postId) => {
  return (dispatch) => {
    return getPostCommentCount(postId).then((res) => {
      dispatch(actionFetchCommentCountRedux(res));
    });
  };
};
