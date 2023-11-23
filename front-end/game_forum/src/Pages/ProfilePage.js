import React, { useEffect } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import Nav from "../Components/Nav";
import { Container } from "reactstrap";
import FooterContainer from "../Containers/FooterContainer";
import ProfileComponent from "../Components/ProfileComponent/ProfileComponent";

function ProfilePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <ProfileComponent />
      <FooterContainer />
    </div>
  );
}

export default ProfilePage;
