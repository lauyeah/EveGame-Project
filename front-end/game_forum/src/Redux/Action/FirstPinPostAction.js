import { getPinPost } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchFirstPinPostAPI = () => {
  return (dispatch) => {
    return getPinPost("FIRST")
      .then((res) => {
        dispatch(actionFetchFirstPinPostRedux(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export let actionFetchFirstPinPostRedux = (pinPost) => {
  return {
    type: TYPES.FETCH_FIRST_PIN_POST,
    payload: pinPost,
  };
};
