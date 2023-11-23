import React from "react";
import { useSelector } from "react-redux";
import MyPageAdminComponent from "./MyPageAdminComponent";
import MyPageMemberComponent from "./MyPageMemberComponent";

function MyPageComponent(props) {
  let stateRedux = useSelector((state) => state);
  let user = stateRedux.user;
  if (user.role == "ADMIN") {
    return <MyPageAdminComponent />;
  } else {
    return <MyPageMemberComponent />;
  }
}

export default MyPageComponent;
