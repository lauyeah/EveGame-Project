import * as TYPES from "../Contant/ActionType";

let initialState = {};

let TopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_TOPIC_LIST:
      state = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default TopicReducer;
