import axios from "axios";

let axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "content-type": "application/json",
  },
  // auth: {
  //   username: localStorage.getItem("username"),
  //   password: localStorage.getItem("pwd"),
  // },
});

export let api = (method, endpoint, payload, auth) => {
  return axiosClient(endpoint, { method: method, data: payload, auth: auth })
    .then((response) => {
      //   console.log("api");
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
