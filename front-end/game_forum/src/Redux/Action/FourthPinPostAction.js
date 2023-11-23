import { getPinPost } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchFourthPinPostAPI = () => {
  return (dispatch) => {
    return getPinPost("FOURTH")
      .then((res) => {
        dispatch(actionFetchFourthPinPostRedux(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export let actionFetchFourthPinPostRedux = (pinPost) => {
  return {
    type: TYPES.FETCH_FOURTH_PIN_POST,
    payload: pinPost,
  };
};
