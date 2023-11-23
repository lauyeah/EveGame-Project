import React, { useEffect } from "react";
import TopicUI from "../Components/TopicComponents/TopicUI";
import HeaderContainer from "../Containers/HeaderContainer";
import { Container } from "reactstrap";
import Nav from "../Components/Nav";
import FooterContainer from "../Containers/FooterContainer";

function TopicPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <TopicUI />
      <FooterContainer />
    </div>
  );
}

export default TopicPage;
