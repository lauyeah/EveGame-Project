import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from "reactstrap";
import { actionFetchFirstPinPostAPI } from "../../Redux/Action/FirstPinPostAction";

function Pin1Component(props) {
  let disPatchRedux = useDispatch();
  let storeRedux = useSelector((state) => state);
  useEffect(() => {
    disPatchRedux(actionFetchFirstPinPostAPI());
  }, []);

  let firstPinPost = storeRedux.firstPinPost;

  let link1 = "/posts/" + firstPinPost.id;

  if (firstPinPost.id) {
    return (
      <Col className="col-md-8 col-12">
        <Card className="border-0">
          <Link to={link1}>
            <CardImg alt="" src={firstPinPost.postCover} />
          </Link>
          <CardBody>
            <CardTitle tag="h5">
              <Link to={link1}>{firstPinPost.title}</Link>
            </CardTitle>

            <CardText className="d-flex align-items-center gap-2">
              <img
                alt="post-user-avatar"
                src={firstPinPost.user.avatar}
                width={24}
                height={24}
              />
              <small className="text-muted">{firstPinPost.user.fullname}</small>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Pin1Component;
