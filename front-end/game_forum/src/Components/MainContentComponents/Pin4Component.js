import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";

function Pin4Component(props) {
  let storeRedux = useSelector((state) => state);

  let fourthPinPost = storeRedux.fourthPinPost;

  let link4 = "/posts/" + fourthPinPost.id;
  if (fourthPinPost.id) {
    return (
      <Col className="col-md-4 col-6">
        <Card className="border-0">
          <Link to={link4}>
            <CardImg alt="" src={fourthPinPost.postCover} />
          </Link>
          <CardBody>
            <CardTitle tag="h5">
              <Link to={link4}>{fourthPinPost.title}</Link>
            </CardTitle>
            <CardText>
              <small className="text-muted">
                {fourthPinPost.user.fullname}
              </small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Pin4Component;
