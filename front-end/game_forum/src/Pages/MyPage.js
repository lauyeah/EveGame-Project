import React, { useEffect } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import { Container } from "reactstrap";
import Nav from "../Components/Nav";
import MyPageComponent from "../Components/ProfileComponent/MyPageComponent";
import FooterContainer from "../Containers/FooterContainer";

function MyPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <MyPageComponent />
      <FooterContainer />
    </div>
  );
}

export default MyPage;
