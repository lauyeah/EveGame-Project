import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
  Form,
  Input,
  Modal,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionFetchLoginAPI } from "../../Redux/Action/LoginAction";
import { api } from "../../Api/api";

function Login(props) {
  let [username, setUsername] = useState("");
  let [pwd, setPwd] = useState("");
  let disPatchRedux = useDispatch();

  let handleLogin = async () => {
    let auth = {
      username: username,
      password: pwd,
    };
    let userCk = await api("GET", "auth/login", null, auth);
    if (userCk) {
      localStorage.setItem("username", username);
      localStorage.setItem("pwd", pwd);
      onHandleLogin();
    } else {
      handleOpenWrongPwdModal();
    }
  };

  let onHandleLogin = async () => {
    await disPatchRedux(actionFetchLoginAPI());
    window.location.replace("http://localhost:3000");
  };

  let [wrongPwdModal, setWrongPwdModal] = useState(false);
  let handleCloseWrongPwdModal = () => {
    setWrongPwdModal(false);
  };
  let handleOpenWrongPwdModal = () => {
    setWrongPwdModal(true);
  };

  return (
    <Container className="pt-5 login-form d-flex justify-content-center">
      <Modal isOpen={wrongPwdModal}>
        <ModalHeader>Sai tài khoản hoặc mật khẩu!</ModalHeader>
        <ModalFooter>
          <Button onClick={handleCloseWrongPwdModal}>Đóng</Button>
        </ModalFooter>
      </Modal>
      <Card>
        <CardHeader className="bg-body px-4 py-3">
          <CardText className="fw-bold">
            <h5 className="m-0">Đăng nhập tài khoản</h5>
          </CardText>
        </CardHeader>
        <CardBody className="d-flex flex-column p-0">
          <div className="align-items-center p-4 d-flex flex-column">
            <img
              alt="logo"
              src="https://i.ibb.co/dtLRs2z/logo.png"
              width={66}
              height={66}
              onClick={() => {
                window.location.replace("http://localhost:3000");
              }}
              style={{ cursor: "pointer" }}
            />
            <span
              className="fw-bold text-danger"
              onClick={() => {
                window.location.replace("http://localhost:3000");
              }}
              style={{ cursor: "pointer" }}
            >
              EveGame
            </span>
          </div>

          <Form className="px-4 py-3 d-flex flex-column gap-3">
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></Input>
            <Input
              type="password"
              placeholder="password"
              value={pwd}
              onChange={(event) => {
                setPwd(event.target.value);
              }}
            ></Input>

            <CardText className="align-self-end m-0">
              <Link to="/reset-pwd">Quên mật khẩu?</Link>
            </CardText>

            <Button onClick={handleLogin} className="fw-bold" color="primary">
              Đăng nhập
            </Button>

            <CardText className="align-self-center">
              Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </CardText>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Login;
