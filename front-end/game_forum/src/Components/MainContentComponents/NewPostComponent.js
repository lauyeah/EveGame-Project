import React from "react";
import { Button, Container } from "reactstrap";
import NewPostItem from "./NewPostItem";
import { useDispatch } from "react-redux";
import { actionFetchListPostAPI } from "../../Redux/Action/PostAction";

function NewPostComponent(props) {
  let disPatchRedux = useDispatch();
  let handleMorePost = () => {
    disPatchRedux(actionFetchListPostAPI(1));
  };

  return (
    <Container className="newest-post">
      <NewPostItem />
      <Button
        color="light"
        className="col-12 border-0 mt-3"
        onClick={handleMorePost}
      >
        Xem thêm
      </Button>
    </Container>
  );
}

export default NewPostComponent;
