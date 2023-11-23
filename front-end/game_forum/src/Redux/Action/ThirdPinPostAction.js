import { getPinPost } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchThirdPinPostAPI = () => {
  return (dispatch) => {
    return getPinPost("THIRD")
      .then((res) => {
        dispatch(actionFetchThirdPinPostRedux(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export let actionFetchThirdPinPostRedux = (pinPost) => {
  return {
    type: TYPES.FETCH_THIRD_PIN_POST,
    payload: pinPost,
  };
};
