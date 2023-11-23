import * as TYPES from "../Contant/ActionType";

let initialState = {};

let FourthPinPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_FOURTH_PIN_POST:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default FourthPinPostReducer;
