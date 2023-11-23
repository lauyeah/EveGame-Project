import * as TYPES from "../Contant/ActionType";

let initialState = false;

let UpdateProfileModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.OPEN_UPDATE_PROFILE_MODAL:
      return true;
    case TYPES.CLOSE_UPDATE_PROFILE_MODAL:
      return false;
    default:
      return state;
  }
};

export default UpdateProfileModalReducer;
