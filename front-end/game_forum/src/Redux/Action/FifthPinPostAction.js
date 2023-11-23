import { getPinPost } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchFifthPinPostAPI = () => {
  return (dispatch) => {
    return getPinPost("FIFTH")
      .then((res) => {
        dispatch(actionFetchFifthPinPostRedux(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export let actionFetchFifthPinPostRedux = (pinPost) => {
  return {
    type: TYPES.FETCH_FIFTH_PIN_POST,
    payload: pinPost,
  };
};
