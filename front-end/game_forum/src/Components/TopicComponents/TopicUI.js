import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchTopicListAPI } from "../../Redux/Action/TopicAction";
import { Link } from "react-router-dom";

function TopicUI(props) {
  let disPatchRedux = useDispatch();
  useEffect(() => {
    disPatchRedux(actionFetchTopicListAPI());
  }, []);
  let stateRedux = useSelector((state) => state.topicList);
  let topicList = stateRedux.content;

  let items = "";
  if (topicList) {
    items = topicList.map((topic, index) => {
      let link = "/topics/" + topic.id;
      return (
        <ListGroupItem key={index}>
          <Link to={link}>{topic.name}</Link>
        </ListGroupItem>
      );
    });
  }

  return (
    <Container>
      <h2>Topics</h2>
      <ListGroup>{items}</ListGroup>
    </Container>
  );
}

export default TopicUI;
