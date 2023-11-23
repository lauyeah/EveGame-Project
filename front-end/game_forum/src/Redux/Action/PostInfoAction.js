import { getPostById } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchPostInfoAPI = (id) => {
  return (dispatch) => {
    return getPostById(id).then((res) => {
      dispatch(actionFetchPostInfoRedux(res));
    });
  };
};

export let actionFetchPostInfoRedux = (postInfo) => {
  return {
    type: TYPES.FETCH_POST_INFO,
    payload: postInfo,
  };
};
