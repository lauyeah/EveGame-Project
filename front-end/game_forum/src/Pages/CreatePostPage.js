import React from "react";
import CreateNewPostComponent from "../Components/CreateNewPostComponent";
import HeaderContainer from "../Containers/HeaderContainer";
import Nav from "../Components/Nav";
import { Container } from "reactstrap";
import FooterContainer from "../Containers/FooterContainer";

function CreatePostPage(props) {
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <CreateNewPostComponent />
      <FooterContainer />
    </div>
  );
}

export default CreatePostPage;
