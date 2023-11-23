import * as TYPES from "../Contant/ActionType";

let initialState = {};

let SecondPinPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_SECOND_PIN_POST:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default SecondPinPostReducer;
