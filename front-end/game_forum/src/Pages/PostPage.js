import React, { useEffect } from "react";
import PostContainer from "../Containers/PostContainer";
import HeaderContainer from "../Containers/HeaderContainer";
import FooterContainer from "../Containers/FooterContainer";
import { Container } from "reactstrap";
import Nav from "../Components/Nav";

function PostPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderContainer />
      <Container>{/* <Nav /> */}</Container>
      <PostContainer />
      <FooterContainer />
    </div>
  );
}

export default PostPage;
