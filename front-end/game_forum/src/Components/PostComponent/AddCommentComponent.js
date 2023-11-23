import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Button } from "reactstrap";
import {
  actionCreateCommentAPI,
  actionFetchCommentCountAPI,
  actionFetchPostCommentAPI,
} from "../../Redux/Action/PostCommentAction";
import { Link, useParams } from "react-router-dom";
import guestAvatar from "../../Assets/Images/default-avatar.jpg";
import { getPostById } from "../../Api/PostAPI";

function AddCommentComponent(props) {
  let { user } = props;
  let [cmtContent, setCmtContent] = useState("");
  let [postInfo, setPostInfo] = useState({});

  let param = useParams();
  let postId = param.id;

  useEffect(() => {
    async function getPostInfo() {
      let postInfo = await getPostById(postId);
      setPostInfo(postInfo);
    }
    getPostInfo();
  }, []);

  let handleIsActive = () => {
    if (user.activation && postInfo.postStatus == "ALLOWED") {
      return (
        <Row className="post-user-comment-input" id="post-user-comment-input">
          <Col className="col-12 col-sm-1 pt-2">
            <img
              width={40}
              height={40}
              src={user.avatar}
              alt="user-avatar"
              className="rounded-circle object-fit-cover"
            />
          </Col>
          <Col className="pt-2">
            <div className="input-group">
              <textarea
                id="cmt-content"
                className="form-control"
                aria-label="With textarea"
                placeholder="Bạn nghĩ gì về chủ đề này?"
                rows={5}
                onChange={(event) => {
                  setCmtContent(event.target.value);
                }}
              ></textarea>
            </div>
          </Col>
          <Col className="col-12 d-flex justify-content-end pt-2">
            <Button color="primary" onClick={handleAddComment}>
              Gửi
            </Button>
          </Col>
        </Row>
      );
    } else if (postInfo.postStatus == "WAITING") {
      return (
        <Row className="post-user-comment-input" id="post-user-comment-input">
          <Col className="col-12 col-sm-1 pt-2">
            <img
              width={40}
              height={40}
              src={user.avatar}
              alt="user-avatar"
              className="rounded-circle object-fit-cover"
            />
          </Col>
          <Col className="pt-2">
            <div className="input-group">
              <div className="text-secondary px-2">
                Không thể bình luận do bài viết đang chờ duyệt.
              </div>
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row className="post-user-comment-input" id="post-user-comment-input">
          <Col className="col-12 col-sm-1 pt-2">
            <img
              width={40}
              height={40}
              src={user.avatar}
              alt="user-avatar"
              className="rounded-circle object-fit-cover"
            />
          </Col>
          <Col className="pt-2">
            <div className="input-group">
              <div className="text-secondary px-2">
                Tài khoản cần được kích hoạt để bình luận.
              </div>
            </div>
          </Col>
        </Row>
      );
    }
  };

  let disPatchRedux = useDispatch();

  let handleAddComment = async () => {
    if (cmtContent != "") {
      let cmt = {
        user: user.id,
        post: postId,
        cmtContent: cmtContent,
      };
      await disPatchRedux(actionCreateCommentAPI(cmt));
      await disPatchRedux(actionFetchPostCommentAPI(postId));
      await disPatchRedux(actionFetchCommentCountAPI(postId));
      document.getElementById("cmt-content").value = "";
    } else {
      console.log("viết gì đi");
    }
  };
  return (
    <div>
      {user.id ? (
        handleIsActive()
      ) : (
        <Row className="post-user-comment-input" id="post-user-comment-input">
          <Col className="col-12 col-sm-1 pt-2">
            <img
              width={40}
              height={40}
              src={guestAvatar}
              alt="user-avatar"
              className="rounded-circle object-fit-cover"
            />
          </Col>
          <Col className="pt-2">
            <div className="input-group">
              <Link to={"/login"} className="text-secondary px-2">
                Bài viết thật thú vị? Đăng nhập để bình luận...
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AddCommentComponent;
