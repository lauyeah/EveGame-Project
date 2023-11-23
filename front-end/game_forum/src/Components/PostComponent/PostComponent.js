import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { GoHeart, GoComment, GoShare } from "react-icons/go";
import { BsCheck2Circle, BsDot } from "react-icons/bs";
import { BiHeartCircle } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchPostInfoAPI } from "../../Redux/Action/PostInfoAction";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import AddCommentComponent from "./AddCommentComponent";
import PostCommentComponent from "./PostCommentComponent";
import ConfirmComponent from "../ConfirmComponent/ConfirmComponent";
import { actionOpenConfirmModal } from "../../Redux/Action/ConfirmModalAction";
import { actionFetchCommentCountAPI } from "../../Redux/Action/PostCommentAction";
import { allowingPost, denyingPost } from "../../Api/PostAPI";
import { MdDoNotDisturbAlt } from "react-icons/md";

function PostComponent(props) {
  let param = useParams();
  let postId = param.id;
  let disPatchRedux = useDispatch();
  useEffect(() => {
    disPatchRedux(actionFetchPostInfoAPI(postId));
  }, []);

  let handleComment = () => {
    document.getElementById("post-user-comment-input").scrollIntoView();
  };

  let handleDelete = () => {
    disPatchRedux(actionOpenConfirmModal());
  };

  let storeRedux = useSelector((state) => state);
  let postInfo = storeRedux.postInfo;
  let postUser = storeRedux.postInfo.user;
  let user = storeRedux.user;
  let cmtCount = storeRedux.cmtCount;
  // console.log(cmtCount);

  useEffect(() => {
    // async function ckPost() {
    //   let post = await actionFetchPostInfoAPI(postId);
    //   if (post.id) {
    //     disPatchRedux(actionFetchCommentCountAPI(postId));
    //   }
    // }
    // ckPost();
    disPatchRedux(actionFetchCommentCountAPI(postId));
  }, [cmtCount]);

  let handleAllowPost = async () => {
    await allowingPost(postId);
    window.location.reload();
  };
  let handleDenyPost = async () => {
    await denyingPost(postId);
    window.location.reload();
  };

  if (postInfo.id && postInfo.postStatus != "DENIED") {
    return (
      <Container>
        <ConfirmComponent postId={postId} />

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
                <Link
                  className="dropdown-item"
                  to={"/edit-post/" + postId}
                  state={{
                    postId: postId,
                    topicId: postInfo.topic.id,
                    postTitle: postInfo.title,
                    postCover: postInfo.postCover,
                    postContent: postInfo.postContent,
                  }}
                >
                  <AiOutlineEdit className="text-primary" />
                  <span> Sửa bài viết</span>
                </Link>
                {postInfo.postStatus == "WAITING" ? (
                  <div>
                    <Button className="dropdown-item" onClick={handleAllowPost}>
                      <BsCheck2Circle className="text-success" />
                      <span> Duyệt bài này</span>
                    </Button>
                    <Button className="dropdown-item" onClick={handleDenyPost}>
                      <MdDoNotDisturbAlt className="text-warning" />
                      <span> Từ chối duyệt</span>
                    </Button>
                  </div>
                ) : (
                  <div></div>
                )}
                <Button className="dropdown-item" onClick={handleDelete}>
                  <AiOutlineDelete className="text-danger" />
                  <span> Xóa bài viết</span>
                </Button>
              </div>
            </div>
          </Row>
        ) : (
          <Row></Row>
        )}

        <Row className="post-title">
          <h2>{postInfo.title}</h2>
        </Row>
        <Row className="writer-row">
          <span className="d-flex align-items-center">
            <img
              src={postUser.avatar}
              width={40}
              height={40}
              alt="post-user-avatar"
              className="post-user-avatar rounded-circle me-3 border border-primary object-fit-cover"
            />
            <div className="post-info text-nowrap">
              <div className="post-user-name text-primary">
                {postUser.fullname}
              </div>
              <div className="post-created-date d-flex align-items-center justify-content-start gap-2">
                <span>{postInfo.postDate}</span> <BsDot />
                <span>Bình luận: {cmtCount}</span>
              </div>
            </div>
          </span>
        </Row>

        <Row className="post-content pt-3 m-0">
          <img
            src={postInfo.postCover}
            alt="Ảnh bìa"
            className="rounded px-0"
          />
          <p className="pt-3 px-0 m-0">{postInfo.postContent}</p>
        </Row>

        <Row className="post-liked-comment-count pt-3 m-0 ">
          <Col className="d-flex align-items-center justify-content-start gap-2 px-0">
            <BiHeartCircle className="text-primary" />
            <span>3</span> <BsDot /> <span>{cmtCount} bình luận</span>
          </Col>
        </Row>

        <Row className="post-user-action pt-3 m-0">
          <hr className="mb-2" />
          <div className="d-flex gap-1 justify-content-between align-items-center px-0">
            <Button
              className="col-4 border-0 d-flex align-items-center justify-content-center gap-2"
              color="light"
            >
              <GoHeart />
              Thích
            </Button>
            <Button
              className="col-4 border-0 d-flex align-items-center justify-content-center gap-2"
              color="light"
              onClick={handleComment}
            >
              <GoComment />
              Bình luận
            </Button>
            <Button
              className="col-4 border-0 d-flex align-items-center justify-content-center gap-2"
              color="light"
            >
              <GoShare />
              Chia sẻ
            </Button>
          </div>
          <hr className="mt-2" />
        </Row>

        {/* <AddCommentComponent user={user} /> */}

        <PostCommentComponent cmtCount={cmtCount} />

        <AddCommentComponent user={user} />

        <Row className="post-relative"></Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <h3>Không tìm thấy bài viết hoặc bài viết không được duyệt</h3>
      </Container>
    );
  }
}

export default PostComponent;
