import { api } from "./api";
import { auth } from "./config";

let createUser = (user) => {
  return api("POST", "users/", user);
};

let updateUser = (updatedUser) => {
  let endPoint = "users/" + updatedUser.id;
  return api("PUT", endPoint, updatedUser.info, auth);
};

let changePwd = (form) => {
  let endPoint = "users/" + form.userId + "/password";
  return api("PUT", endPoint, form.info, auth);
};

let getAllUser = () => {
  return api("GET", "users/", null);
};

export { createUser, updateUser, changePwd, getAllUser };
