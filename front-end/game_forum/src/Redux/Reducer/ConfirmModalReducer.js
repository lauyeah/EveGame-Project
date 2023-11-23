import * as TYPES from "../Contant/ActionType";

let initialState = false;

let ConfirmModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.OPEN_CONFIRM_MODAL:
      return true;
    case TYPES.CLOSE_CONFIRM_MODAL:
      return false;
    default:
      return state;
  }
};

export default ConfirmModalReducer;
