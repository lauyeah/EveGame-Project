import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import FirstPinPostReducer from "./FirstPinPostReducer";
import SecondPinPostReducer from "./SecondPinPostReducer";
import ThirdPinPostReducer from "./ThirdPinPostReducer";
import FourthPinPostReducer from "./FourthPinPostReducer";
import FifthPinPostReducer from "./FifthPinPostReducer";
import PostInfoReducer from "./PostInfoReducer";
import TopicReducer from "./TopicReducer";
import TopicPostReducer from "./TopicPostReducer";
import LoginReducer from "./LoginReducer";
import PostCommentReducer from "./PostCommentReducer";
import ConfirmModalReducer from "./ConfirmModalReducer";
import UpdateProfileModalReducer from "./UpdateProfileModalReducer";
import ChangePwdModalReducer from "./ChangePwdModalReducer";
import CmtCountReducer from "./CmtCountReducer";
import MyPostReducer from "./MyPostReducer";

const RootReducers = combineReducers({
  postList: PostReducer,
  firstPinPost: FirstPinPostReducer,
  secondPinPost: SecondPinPostReducer,
  thirdPinPost: ThirdPinPostReducer,
  fourthPinPost: FourthPinPostReducer,
  fifthPinPost: FifthPinPostReducer,
  postInfo: PostInfoReducer,
  topicList: TopicReducer,
  topicPostList: TopicPostReducer,
  user: LoginReducer,
  commentList: PostCommentReducer,
  confirmModal: ConfirmModalReducer,
  updateProfileModal: UpdateProfileModalReducer,
  changePwdModal: ChangePwdModalReducer,
  cmtCount: CmtCountReducer,
  myPost: MyPostReducer,
});

export default RootReducers;
