import * as TYPES from "../Contant/ActionType";

let initialState = {};

let FifthPinPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_FIFTH_PIN_POST:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default FifthPinPostReducer;
