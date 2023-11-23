import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";

function Pin3Component(props) {
  let storeRedux = useSelector((state) => state);
  let thirdPinPost = storeRedux.thirdPinPost;

  let link3 = "/posts/" + thirdPinPost.id;
  if (thirdPinPost.id) {
    return (
      <Col className="col-md-4 col-6">
        <Card className="border-0">
          <Link to={link3}>
            <CardImg alt="" src={thirdPinPost.postCover} />
          </Link>
          <CardBody>
            <CardTitle tag="h5">
              <Link to={link3}>{thirdPinPost.title}</Link>
            </CardTitle>
            <CardText>
              <small className="text-muted">{thirdPinPost.user.fullname}</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Pin3Component;
