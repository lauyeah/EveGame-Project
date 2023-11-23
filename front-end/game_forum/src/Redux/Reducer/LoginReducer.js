import * as TYPES from "../Contant/ActionType";

let initialState = {};

let LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_LOGIN:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default LoginReducer;
