import { getPinPost } from "../../Api/PostAPI";
import * as TYPES from "../Contant/ActionType";

export let actionFetchSecondPinPostAPI = () => {
  return (dispatch) => {
    return getPinPost("SECOND")
      .then((res) => {
        dispatch(actionFetchSecondPinPostRedux(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export let actionFetchSecondPinPostRedux = (pinPost) => {
  return {
    type: TYPES.FETCH_SECOND_PIN_POST,
    payload: pinPost,
  };
};
