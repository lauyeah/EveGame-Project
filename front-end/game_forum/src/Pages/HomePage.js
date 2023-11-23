import React, { useEffect } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import MainContentContainer from "../Containers/MainContentContainer";
import FooterContainer from "../Containers/FooterContainer";
import { Container } from "reactstrap";
import Nav from "../Components/Nav";

function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <MainContentContainer />
      <FooterContainer />
    </div>
  );
}

export default HomePage;
