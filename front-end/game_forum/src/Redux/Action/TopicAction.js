import * as TYPES from "../Contant/ActionType";
import { getAllTopic } from "../../Api/TopicApi";

export let actionFetchTopicListAPI = () => {
  return (dispatch) => {
    return getAllTopic().then((res) => {
      dispatch(actionFetchTopicListRedux(res));
    });
  };
};

export let actionFetchTopicListRedux = (listTopic) => {
  return {
    type: TYPES.FETCH_TOPIC_LIST,
    payload: listTopic,
  };
};
