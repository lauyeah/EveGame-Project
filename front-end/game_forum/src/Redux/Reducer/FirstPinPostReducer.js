import * as TYPES from "../Contant/ActionType";

let initialState = {};

let FirstPinPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_FIRST_PIN_POST:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default FirstPinPostReducer;
