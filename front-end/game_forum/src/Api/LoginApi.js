import { api } from "./api";

export let loginAPI = () => {
  let auth = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("pwd"),
  };
  return api("GET", "auth/login/", null, auth);
};
