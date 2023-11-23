import * as TYPES from "../Contant/ActionType";

let initialState = 0;

let CmtCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_COMMENT_COUNT:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default CmtCountReducer;
