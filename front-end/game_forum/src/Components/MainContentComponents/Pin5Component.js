import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";

function Pin5Component(props) {
  let storeRedux = useSelector((state) => state);

  let fifthPinPost = storeRedux.fifthPinPost;

  let link5 = "/posts/" + fifthPinPost.id;
  if (fifthPinPost.id) {
    return (
      <Col className="col-md-4 col-6">
        <Card className="border-0">
          <Link to={link5}>
            <CardImg alt="" src={fifthPinPost.postCover} />
          </Link>
          <CardBody>
            <CardTitle tag="h5">
              <Link to={link5}>{fifthPinPost.title}</Link>
            </CardTitle>
            <CardText>
              <small className="text-muted">{fifthPinPost.user.fullname}</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Pin5Component;
