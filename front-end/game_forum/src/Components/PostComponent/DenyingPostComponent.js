import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { SlOptions } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import ConfirmComponent from "../ConfirmComponent/ConfirmComponent";
import { actionOpenConfirmModal } from "../../Redux/Action/ConfirmModalAction";
import { getAllDeniedPost } from "../../Api/PostAPI";
import { BsCheckCircle } from "react-icons/bs";
import { allowingPost } from "../../Api/PostAPI";

function DenyingPostComponent(props) {
  let [postId, setPostId] = useState(null);
  let [deniedPost, setDeniedPost] = useState([]);
  let disPatchRedux = useDispatch();

  useEffect(() => {
    async function getPost() {
      let deniedPost = await getAllDeniedPost();
      deniedPost ? setDeniedPost(deniedPost.content) : setDeniedPost([]);
    }
    getPost();
  }, []);

  let items = "";

  let handleAllow = async (postId) => {
    await setPostId(postId);
    await allowingPost(postId);
    window.location.reload();
  };

  let handleDelete = async (postId) => {
    await setPostId(postId);
    disPatchRedux(actionOpenConfirmModal());
  };

  deniedPost.sort((pos1, pos2) => pos2.id - pos1.id);

  items = deniedPost.map((post, index) => {
    let link = "/posts/" + post.id;
    let status = () => {
      switch (post.postStatus) {
        case "ALLOWED":
          return (
            <Button color="success" size="sm">
              Đã được duyệt
            </Button>
          );
        case "WAITING":
          return (
            <Button color="warning" size="sm">
              Đang chờ duyệt
            </Button>
          );
        case "DENIED":
          return (
            <Button color="danger" size="sm">
              Từ chối duyệt
            </Button>
          );
        default:
          break;
      }
    };
    return (
      <div>
        <ConfirmComponent postId={postId} />
        <Card className="border-0 new-post-item pt-3" key={post.id}>
          <Row>
            <Col className="d-flex justify-content-end me-1">{status()}</Col>

            <Col className="dropdown col-1 d-flex justify-content-end">
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
                <Button
                  className="dropdown-item"
                  onClick={() => {
                    handleAllow(post.id);
                  }}
                >
                  <BsCheckCircle className="text-success" />
                  <span> Duyệt bài này</span>
                </Button>
                <Button
                  className="dropdown-item"
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  <AiOutlineDelete id={post.id} className="text-danger" />
                  <span id={post.id}> Xóa bài viết</span>
                </Button>
              </div>
            </Col>
          </Row>

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
      </div>
    );
  });

  return (
    <Container className="topic-post">
      {items.length > 0 ? items : "Không có bài viết nào bị từ chối."}
    </Container>
  );
}

export default DenyingPostComponent;
