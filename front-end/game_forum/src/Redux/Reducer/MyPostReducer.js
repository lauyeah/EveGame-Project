import * as TYPES from "../Contant/ActionType";

let initialState = [];

let MyPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_MY_POST:
      state = action.payload;
      return [...state];
    case TYPES.FETCH_DELETE_MY_POST:
      let deletePostId = action.payload;
      let myPostState = state;
      let deletePostIndex = myPostState.findIndex(
        (post) => post.id === deletePostId
      );
      myPostState.splice(deletePostIndex, 1);
      return myPostState;
    default:
      return [...state];
  }
};

export default MyPostReducer;
