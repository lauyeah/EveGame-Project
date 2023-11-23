import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";
import { actionFetchSecondPinPostAPI } from "../../Redux/Action/SecondPinPostAction";

function Pin2Component(props) {
  let storeRedux = useSelector((state) => state);
  let disPatchRedux = useDispatch();
  useEffect(() => {
    disPatchRedux(actionFetchSecondPinPostAPI());
  }, []);

  let secondPinPost = storeRedux.secondPinPost;

  let link2 = "/posts/" + secondPinPost.id;
  if (secondPinPost.id) {
    return (
      <Col className="col-md-4 col-6 second-pin-post">
        <Card className="border-0">
          <Link to={link2}>
            <CardImg alt="" src={secondPinPost.postCover} />
          </Link>

          <CardBody className="px-0 px-md-3">
            <CardTitle tag="h5">
              <Link to={link2}>{secondPinPost.title}</Link>
            </CardTitle>
            <CardText>
              <small className="text-muted">
                {secondPinPost.user.fullname}
              </small>
            </CardText>
            <CardText>{secondPinPost.postContent.slice(0, 400)}...</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Pin2Component;
