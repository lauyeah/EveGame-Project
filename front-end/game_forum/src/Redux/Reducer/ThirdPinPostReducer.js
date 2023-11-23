import * as TYPES from "../Contant/ActionType";

let initialState = {};

let ThirdPinPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_THIRD_PIN_POST:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default ThirdPinPostReducer;
