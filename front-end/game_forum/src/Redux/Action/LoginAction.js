import { loginAPI } from "../../Api/LoginApi";
import * as TYPES from "../Contant/ActionType";

export let actionFetchLoginRedux = (user) => {
  return {
    type: TYPES.FETCH_LOGIN,
    payload: user,
  };
};

export let actionFetchLoginAPI = () => {
  return (dispatch) => {
    return loginAPI().then((res) => {
      dispatch(actionFetchLoginRedux(res));
    });
  };
};
