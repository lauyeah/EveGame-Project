import { api } from "./api";
import { auth } from "./config";

let getCommentByPostId = (id) => {
  let endPoint = "comments/post/" + id;
  return api("GET", endPoint, null);
};

let createComment = (comment) => {
  return api("POST", "comments", comment, auth);
};

let deleteCommentById = (commentId) => {
  let endPoint = "comments/" + commentId;
  return api("DELETE", endPoint, null, auth);
};

let getPostCommentCount = (postId) => {
  let endPoint = "comments/post/" + postId + "/count";
  return api("GET", endPoint, null);
};

export {
  getCommentByPostId,
  createComment,
  deleteCommentById,
  getPostCommentCount,
};
