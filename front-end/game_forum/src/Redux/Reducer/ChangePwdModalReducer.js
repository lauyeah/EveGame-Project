import * as TYPES from "../Contant/ActionType";

let initialState = false;

let ChangePwdModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.OPEN_CHANGE_PWD_MODAL:
      return true;
    case TYPES.CLOSE_CHANGE_PWD_MODAL:
      return false;
    default:
      return state;
  }
};

export default ChangePwdModalReducer;
