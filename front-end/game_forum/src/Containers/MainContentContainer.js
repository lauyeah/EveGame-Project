import React, { useEffect } from "react";
import HighlightPostComponent from "../Components/MainContentComponents/HighlightPostComponent";
import NewPostComponent from "../Components/MainContentComponents/NewPostComponent";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchFirstPinPostAPI } from "../Redux/Action/FirstPinPostAction";
import { actionFetchSecondPinPostAPI } from "../Redux/Action/SecondPinPostAction";
import { actionFetchThirdPinPostAPI } from "../Redux/Action/ThirdPinPostAction";
import { actionFetchFourthPinPostAPI } from "../Redux/Action/FourthPinPostAction";
import { actionFetchFifthPinPostAPI } from "../Redux/Action/FifthPinPostAction";
import { actionFetchListPostAPI } from "../Redux/Action/PostAction";
import { actionFetchTopicListAPI } from "../Redux/Action/TopicAction";

function MainContentContainer(props) {
  let disPatchRedux = useDispatch();

  useEffect(() => {
    disPatchRedux(actionFetchListPostAPI(0));
    disPatchRedux(actionFetchTopicListAPI());

    disPatchRedux(actionFetchFirstPinPostAPI());
    disPatchRedux(actionFetchSecondPinPostAPI());
    disPatchRedux(actionFetchThirdPinPostAPI());
    disPatchRedux(actionFetchFourthPinPostAPI());
    disPatchRedux(actionFetchFifthPinPostAPI());
  }, []);

  return (
    <div>
      <HighlightPostComponent />
      <NewPostComponent />
    </div>
  );
}

export default MainContentContainer;
