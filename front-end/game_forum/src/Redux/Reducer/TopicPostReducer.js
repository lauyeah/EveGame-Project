import * as TYPES from "../Contant/ActionType";

let initialState = {};

let TopicPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_TOPIC_POST_LIST:
      state = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default TopicPostReducer;
