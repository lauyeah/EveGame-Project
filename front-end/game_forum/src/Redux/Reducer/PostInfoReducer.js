import * as TYPES from "../Contant/ActionType";

let initialState = {};

let PostInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_POST_INFO:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default PostInfoReducer;
