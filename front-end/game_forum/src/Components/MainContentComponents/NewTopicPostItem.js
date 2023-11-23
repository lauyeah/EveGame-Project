import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
import { actionFetchTopicPostListAPI } from "../../Redux/Action/TopicPostAction";
import { actionFetchTopicListAPI } from "../../Redux/Action/TopicAction";
import { SlOptions } from "react-icons/sl";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import ConfirmComponent from "../ConfirmComponent/ConfirmComponent";
import { actionOpenConfirmModal } from "../../Redux/Action/ConfirmModalAction";

function NewTopicPostItem(props) {
  let param = useParams();
  let topicId = param.id;

  let [postId, setPostId] = useState(null);

  let stateRedux = useSelector((state) => state);
  let topicPostList = stateRedux.topicPostList.content;
  let user = stateRedux.user;

  let disPatchRedux = useDispatch();

  useEffect(() => {
    disPatchRedux(actionFetchTopicPostListAPI(topicId));
    disPatchRedux(actionFetchTopicListAPI());
  }, []);

  let topicList = stateRedux.topicList.content;
  let items = "";
  let topicName = "";

  let handleDelete = async (postId) => {
    await setPostId(postId);
    disPatchRedux(actionOpenConfirmModal());
  };

  if (topicPostList && topicList) {
    topicList.forEach((topic) => {
      if (topic.id == topicId) {
        topicName = topic.name;
      }
    });
    items = topicPostList.map((post, index) => {
      let link = "/posts/" + post.id;

      return (
        <div>
          <ConfirmComponent postId={postId} />
          <Card className="border-0 new-post-item pt-3" key={post.id}>
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
                      to={"/edit-post/" + post.id}
                      state={{
                        postId: post.id,
                        topicId: post.topic.id,
                        postTitle: post.title,
                        postCover: post.postCover,
                        postContent: post.postContent,
                      }}
                    >
                      <AiOutlineEdit className="text-primary" />
                      <span> Sửa bài viết</span>
                    </Link>
                    <Button
                      className="dropdown-item"
                      // id={post.id}
                      // onClick={(event) => {
                      //   handleDelete(event.target.id);
                      // }}
                      onClick={() => {
                        handleDelete(post.id);
                      }}
                    >
                      <AiOutlineDelete id={post.id} className="text-danger" />
                      <span id={post.id}> Xóa bài viết</span>
                    </Button>
                  </div>
                </div>
              </Row>
            ) : (
              <Row></Row>
            )}

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
        <h2>{topicName}</h2>
        {items}
      </Container>
    );
  }
}

export default NewTopicPostItem;
