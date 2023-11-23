import React, { useEffect } from "react";
import HeaderContainer from "../Containers/HeaderContainer";
import Nav from "../Components/Nav";
import { Container } from "reactstrap";
import FooterContainer from "../Containers/FooterContainer";
import EditPostComponent from "../Components/EditPostComponent";

function EditPostPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <EditPostComponent />
      <FooterContainer />
    </div>
  );
}

export default EditPostPage;
