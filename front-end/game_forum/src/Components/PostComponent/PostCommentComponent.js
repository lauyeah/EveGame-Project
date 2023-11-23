import React, { useEffect } from "react";
import { Button, Card, CardBody, CardText, Col, Row } from "reactstrap";
import logo from "../../Assets/Images/logo.png";
import { BsDot } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  actionDeleteCommentAPI,
  actionFetchPostCommentAPI,
} from "../../Redux/Action/PostCommentAction";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";

function PostCommentComponent(props) {
  let { cmtCount } = props;
  let param = useParams();
  let postId = param.id;

  let disPatchRedux = useDispatch();

  useEffect(() => {
    disPatchRedux(actionFetchPostCommentAPI(postId));
  }, [cmtCount]);

  let stateRedux = useSelector((state) => state);
  let commentList = stateRedux.commentList.content;

  let user = stateRedux.user;

  let items = "";

  let handleComment = () => {
    document.getElementById("post-user-comment-input").scrollIntoView();
  };

  let handleCmtDelete = async (cmtId) => {
    await disPatchRedux(actionDeleteCommentAPI(cmtId));
    await disPatchRedux(actionFetchPostCommentAPI(postId));
  };

  if (commentList) {
    commentList.sort((cmt1, cmt2) => cmt1.id - cmt2.id);
    items = commentList.map((cmt) => {
      return (
        <div>
          {user.role == "ADMIN" ? (
            <Row className="text-end">
              <div className="dropdown">
                <Button
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  color="light"
                  className="rounded-circle"
                  size="sm"
                >
                  <SlOptions />
                </Button>

                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Button className="dropdown-item">
                    <AiOutlineEdit />
                    <span> Sửa bình luận</span>
                  </Button>

                  <Button
                    className="dropdown-item"
                    onClick={() => {
                      handleCmtDelete(cmt.id);
                    }}
                  >
                    <AiOutlineDelete />
                    <span> Xóa bình luận</span>
                  </Button>
                </div>
              </div>
            </Row>
          ) : (
            <div></div>
          )}
          <Row className="post-comments">
            <Col className="col-12 col-sm-1 pt-2">
              <img
                width={40}
                height={40}
                src={cmt.user.avatar}
                alt="user-avatar"
                className="rounded-circle object-fit-cover"
              />
            </Col>
            <Col className="pt-2">
              <Card color="light" className="border-0">
                <div className="d-inline-flex justify-content-start align-items-center gap-2 px-2 pt-3">
                  <span className="user-comment-name text-primary">
                    {cmt.user.fullname}
                  </span>
                  <span className="created-time text-secondary fs-6">
                    {cmt.cmtDate}
                  </span>
                </div>

                <CardBody className="py-3 px-2">
                  <CardText>{cmt.cmtContent}</CardText>
                </CardBody>
              </Card>
              <div className="d-flex align-items-center gap-2">
                <Button color="light" size="sm">
                  Thích
                </Button>{" "}
                <BsDot className="text-secondary" />
                <Button color="light" size="sm" onClick={handleComment}>
                  Trả lời
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      );
    });
  }

  return items;
}

export default PostCommentComponent;
