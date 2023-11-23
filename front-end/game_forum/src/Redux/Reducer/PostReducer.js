import * as TYPES from "../Contant/ActionType";

let initialState = [];

let PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_LIST_POST:
      state = action.payload;
      return [...state];
    case TYPES.FETCH_DELETE_POST:
      let deletePostId = action.payload;
      let postListState = state;
      let deletePostIndex = postListState.findIndex(
        (post) => post.id === deletePostId
      );
      postListState.splice(deletePostIndex, 1);
      return postListState;
    default:
      return [...state];
  }
};

export default PostReducer;
