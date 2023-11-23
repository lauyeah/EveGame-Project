import React, { useEffect } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import { Container } from "reactstrap";
import Nav from "../Components/Nav";
import FooterContainer from "../Containers/FooterContainer";
import NewTopicPostItem from "../Components/MainContentComponents/NewTopicPostItem";

function TopicPostPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <NewTopicPostItem />
      <FooterContainer />
    </div>
  );
}

export default TopicPostPage;
