import { api } from "./api";

let getAllTopic = () => {
  return api("GET", "topics/", null);
};

export { getAllTopic };
