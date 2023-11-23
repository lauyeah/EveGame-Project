import { getAllPostByTopicID } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchTopicPostListAPI = (id) => {
  return (dispatch) => {
    return getAllPostByTopicID(id).then((res) => {
      dispatch(actionFetchTopicPostListRedux(res));
    });
  };
};

export let actionFetchTopicPostListRedux = (topicPostList) => {
  return {
    type: TYPES.FETCH_TOPIC_POST_LIST,
    payload: topicPostList,
  };
};
