import * as TYPES from "../Contant/ActionType";

let initialState = {};

let PostCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_POST_COMMENT:
      state = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default PostCommentReducer;
