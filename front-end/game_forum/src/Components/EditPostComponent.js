import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { actionFetchTopicListAPI } from "../Redux/Action/TopicAction";
import {
  actionPinPostAPI,
  actionUpdatePostAPI,
} from "../Redux/Action/PostAction";
import { useLocation } from "react-router-dom";

function EditPostComponent(props) {
  let { state } = useLocation();

  let disPatchRedux = useDispatch();
  useEffect(() => {
    disPatchRedux(actionFetchTopicListAPI());
  }, []);

  let stateRedux = useSelector((state) => state);

  let [title, setTitle] = useState(state.postTitle);
  let [postCover, setPostCover] = useState(state.postCover);
  let [postContent, setPostContent] = useState(state.postContent);
  let [topic, setTopic] = useState(state.topicId);

  let [pinPostOrder, setPinPostOrder] = useState(null);

  let topicList = stateRedux.topicList.content;
  let topicItems = "";

  if (topicList) {
    topicItems = topicList.map((topic, index) => {
      return (
        <option value={topic.id} key={index}>
          {topic.name}
        </option>
      );
    });
  }

  let handleEditPost = () => {
    let updatedPost = {
      id: state.postId,
      info: {
        topic: topic,
        title: title,
        postCover: postCover,
        postContent: postContent,
      },
    };
    onHandleEditPost(updatedPost);
  };

  let onHandleEditPost = async (updatedPost) => {
    await disPatchRedux(actionUpdatePostAPI(updatedPost));

    if (pinPostOrder != null) {
      let pinPostInfo = {
        id: state.postId,
        order: pinPostOrder,
      };
      await disPatchRedux(actionPinPostAPI(pinPostInfo));
      window.location.replace("http://localhost:3000");
    } else {
      window.location.replace("http://localhost:3000/posts/" + state.postId);
    }
  };

  let user = stateRedux.user;

  return (
    <Container>
      <Card className="border-0">
        <CardBody>
          <Form>
            <FormGroup>
              <Input
                type="select"
                onChange={(event) => {
                  setTopic(event.target.value);
                }}
                className="border-0"
              >
                <option value={""} selected disabled>
                  Chọn Topic...
                </option>
                {topicItems}
              </Input>
            </FormGroup>

            <FormGroup>
              <Input
                id="Title"
                name="Title"
                placeholder="Nhập tiêu đề bài viết..."
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                className="fs-2 border-0"
              />
            </FormGroup>

            <FormGroup>
              <Input
                className="border-0"
                id="PostCover"
                name="PostCover"
                placeholder="Nhập link ảnh cover cho bài viết..."
                type="text"
                value={postCover}
                onChange={(event) => {
                  setPostCover(event.target.value);
                }}
              />
            </FormGroup>

            <FormGroup>
              <Input
                className="border-0"
                id="PostContent"
                name="PostContent"
                placeholder="Nhập nội dung bài viết..."
                type="textarea"
                rows="20"
                value={postContent}
                onChange={(event) => {
                  setPostContent(event.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter>
          <Row className="d-flex justify-content-end">
            {user.role == "ADMIN" ? (
              <Col>
                <Input
                  type="select"
                  onChange={(event) => {
                    setPinPostOrder(event.target.value);
                  }}
                  className="border-0"
                >
                  <option value={null} selected disabled>
                    Ghim bài này?
                  </option>
                  <option value="FIRST">Ghim vào FIRST</option>
                  <option value="SECOND">Ghim vào SECOND</option>
                  <option value="THIRD">Ghim vào THIRD</option>
                  <option value="FOURTH">Ghim vào FOURTH</option>
                  <option value="FIFTH">Ghim vào FIFTH</option>
                </Input>
              </Col>
            ) : (
              <div></div>
            )}

            <Col className="text-end">
              <Button color="primary" onClick={handleEditPost}>
                Cập nhật
              </Button>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default EditPostComponent;
