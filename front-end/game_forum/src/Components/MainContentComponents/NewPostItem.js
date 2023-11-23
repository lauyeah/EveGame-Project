import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

function NewPostItem(props) {
  let stateRedux = useSelector((state) => state);
  let postList = stateRedux.postList;
  let items = "";
  if (postList) {
    items = postList.map((post, index) => {
      let link = "posts/" + post.id;
      return (
        <Card className="border-0 new-post-item pt-3" key={index}>
          <Row className="d-flex flex-nowrap">
            <Col className="col-lg-3 col-sm-4 col-6">
              <Link to={link}>
                <CardImg alt="" src={post.postCover} />
              </Link>
            </Col>
            <Col>
              <CardBody className="pt-0">
                <CardTitle tag="h5">
                  <Link to={link}>{post.title}</Link>
                </CardTitle>
                <CardText>{post.postContent.slice(0, 400)}...</CardText>
                <CardText className="d-flex align-items-center gap-2">
                  <img
                    alt="post-user-avatar"
                    src={post.user.avatar}
                    width={32}
                    height={32}
                    className="rounded-circle border border-primary object-fit-cover"
                  />
                  <small>{post.user.fullname}</small>
                </CardText>
              </CardBody>
            </Col>
          </Row>
        </Card>
      );
    });
  }
  return items;
}

export default NewPostItem;
