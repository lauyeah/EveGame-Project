import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { actionFetchTopicListAPI } from "../Redux/Action/TopicAction";
import { actionFetchLoginAPI } from "../Redux/Action/LoginAction";
import { actionCreatePostAPI } from "../Redux/Action/PostAction";

function CreateNewPostComponent(props) {
  let [title, setTitle] = useState("");
  let [postCover, setPostCover] = useState("");
  let [postContent, setPostContent] = useState("");
  let [topic, setTopic] = useState("");

  let disPatchRedux = useDispatch();
  useEffect(() => {
    disPatchRedux(actionFetchTopicListAPI());
    disPatchRedux(actionFetchLoginAPI());
  }, []);

  let stateRedux = useSelector((state) => state);
  let topicList = stateRedux.topicList.content;
  let topicItems = "";

  let user = stateRedux.user;

  if (topicList) {
    topicItems = topicList.map((topic, index) => {
      return (
        <option value={topic.id} key={index}>
          {topic.name}
        </option>
      );
    });
  }

  let handleCreateNewPost = () => {
    // console.log("title: ", title);
    // console.log("cover: ", postCover);
    // console.log("content: ", postContent);
    // console.log("topic: ", topic);
    // console.log("user: ", user);

    let newPost = {
      topic: topic,
      user: user.id,
      title: title,
      postCover: postCover,
      postContent: postContent,
    };

    if (
      newPost.title == "" ||
      newPost.postContent == "" ||
      newPost.topic == ""
    ) {
      console.log("not enough info");
    } else {
      disPatchRedux(actionCreatePostAPI(newPost));

      console.log("create success");

      window.location.replace("http://localhost:3000/topics/" + topic);
    }
  };

  return (
    <Container>
      {user.activation ? (
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
          <CardFooter className="d-flex justify-content-end">
            <Button color="primary" onClick={handleCreateNewPost}>
              Đăng
            </Button>
          </CardFooter>
        </Card>
      ) : (
        "Tài khoản phải được kích hoạt để đăng bài"
      )}
    </Container>
  );
}

export default CreateNewPostComponent;
