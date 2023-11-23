import { api } from "./api";
import { auth } from "./config";

let getPinPost = (pinPostOrder) => {
  let endPoint = "posts/pin/" + pinPostOrder;
  return api("GET", endPoint, null);
};

let getPostById = (id) => {
  let endPoint = "posts/" + id;
  return api("GET", endPoint, null);
};

let getAllPost = (page) => {
  let endPoint = "posts/allowed?page=" + page;
  return api("GET", endPoint, null);
};

let getAllPostByTopicID = (id) => {
  let endPoint = "posts/topic/" + id;
  return api("GET", endPoint, null);
};

let createPost = (post) => {
  return api("POST", "posts/", post, auth);
};

let deletePost = (id) => {
  let endPoint = "posts/" + id;
  return api("DELETE", endPoint, null, auth);
};

let updatePost = (updatedPost) => {
  let endPoint = "posts/" + updatedPost.id;
  return api("PUT", endPoint, updatedPost.info, auth);
};

let pinPost = (pinPostInfo) => {
  let endPoint = "posts/pin/set/" + pinPostInfo.id;
  return api("PUT", endPoint, pinPostInfo.order, auth);
};

let getAllPostByUserId = (id) => {
  let endPoint = "posts/user/" + id;
  return api("GET", endPoint, null);
};

let getAllWaitingPost = () => {
  return api("GET", "posts/waiting/", null);
};

let getAllDeniedPost = () => {
  return api("GET", "posts/denied/", null);
};

let allowingPost = (postId) => {
  let endPoint = "/posts/allow/" + postId;
  return api("PUT", endPoint, null, auth);
};

let denyingPost = (postId) => {
  let endPoint = "/posts/deny/" + postId;
  return api("PUT", endPoint, null, auth);
};

export {
  getPinPost,
  getPostById,
  getAllPost,
  getAllPostByTopicID,
  createPost,
  deletePost,
  updatePost,
  pinPost,
  getAllPostByUserId,
  getAllWaitingPost,
  getAllDeniedPost,
  allowingPost,
  denyingPost,
};
