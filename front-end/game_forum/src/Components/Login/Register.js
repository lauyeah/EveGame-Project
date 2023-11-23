import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreateUserAPI } from "../../Redux/Action/UserAction";

function Register(props) {
  let [username, setUsername] = useState("");
  let [pwd, setPwd] = useState("");
  let [confirmPwd, setConfirmPwd] = useState("");
  let [fullname, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [gender, setGender] = useState("");
  let [dateOfBirth, setDateOfBirth] = useState("");
  let [isRule, setIsRule] = useState(false);

  let [msg, setMsg] = useState("");
  let [failModal, setFailModal] = useState(false);
  let [successModal, setSuccessModal] = useState(false);

  let disPatchRedux = useDispatch();

  let handleCheckbox = (event) => {
    if (event.target.checked) {
      setIsRule(true);
    } else {
      setIsRule(false);
    }
  };

  let handleReg = async () => {
    switch (isRule) {
      case true:
        if (pwd != confirmPwd || pwd == "") {
          setMsg("Mật khẩu chưa trùng khớp!");
          setFailModal(true);
          console.log("Mật khẩu chưa trùng khớp!");
        } else if (
          username == "" ||
          fullname == "" ||
          email == "" ||
          phone == "" ||
          gender == "" ||
          dateOfBirth == ""
        ) {
          setMsg("Thiếu thông tin!");
          setFailModal(true);
          console.log("Thiếu thông tin!");
        } else {
          let user = {
            username: username,
            email: email,
            password: pwd,
            avatar: "https://i.ibb.co/2KSPnY1/default-avatar.png",
            phone: phone,
            fullname: fullname,
            gender: gender,
            dateOfBirth: dateOfBirth,
          };

          await disPatchRedux(actionCreateUserAPI(user));

          setSuccessModal(true);
          console.log("bank cho mình để active tài khoản nhé =))");
          // window.location.replace("http://localhost:3000/login");
        }
        break;

      case false:
        setMsg("Bạn phải đồng ý điều khoản để tiếp tục!");
        setFailModal(true);
        console.log("Bạn phải đồng ý điều khoản để tiếp tục!");
        break;
    }
  };

  let handleLogin = () => {
    window.location.replace("http://localhost:3000/login");
  };
  return (
    <Container className="pt-5 reg-form d-flex justify-content-center">
      <Modal isOpen={failModal}>
        <ModalHeader>Thông báo</ModalHeader>
        <ModalBody>{msg}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              setFailModal(false);
            }}
          >
            Hảo!
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={successModal}>
        <ModalHeader>Ố dề</ModalHeader>
        <ModalBody>
          Bạn đã đăng ký thành công! Vui lòng đăng nhập để tiếp tục. (bank tui
          20k để active acc, bank 1 củ cho làm admin =)))
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={handleLogin}>
            Đăng nhập
          </Button>
        </ModalFooter>
      </Modal>
      <Card>
        <CardHeader className="bg-body px-4 py-3">
          <CardText className="fw-bold">
            <h5 className="m-0">Đăng ký tài khoản</h5>
          </CardText>
        </CardHeader>
        <CardBody className="d-flex flex-column p-0">
          <Form className="px-4 py-3 d-flex flex-column">
            <FormGroup>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Tên đầy đủ"
                value={fullname}
                onChange={(event) => {
                  setFullname(event.target.value);
                }}
              ></Input>
              <CardText className="mt-2">
                Đây là tên sẽ xuất hiện trong các bài viết của bạn. Bạn có thể
                sử dụng tên thật hoặc username. Bạn có thể thay đổi tên này về
                sau.
              </CardText>
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></Input>
              <hr className="text-secondary mb-0" />
            </FormGroup>

            <FormGroup>
              <Input
                type="password"
                placeholder="Mật khẩu"
                value={pwd}
                onChange={(event) => {
                  setPwd(event.target.value);
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={confirmPwd}
                onChange={(event) => {
                  setConfirmPwd(event.target.value);
                }}
              ></Input>

              <hr className="text-secondary mb-0" />
            </FormGroup>

            <FormGroup>
              <Input
                type="select"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <option value={""} selected disabled>
                  Chọn giới tính
                </option>

                <option value="MALE">Nam</option>
                <option value="FEMALE">Nữ</option>
                <option value="OTHER">Khác</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="dateOfBirth" className="fs-6">
                Sinh nhật:
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(event) => {
                  setDateOfBirth(event.target.value);
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="phone" className="fs-6">
                Số điện thoại:
              </Label>
              <Input
                id="phone"
                type="text"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              ></Input>
            </FormGroup>

            <FormGroup className="d-flex gap-2">
              <Input
                className="form-check-input"
                type="checkbox"
                onChange={handleCheckbox}
              />
              <CardText>
                Tôi đồng ý với <a href="#">điều khoản dịch vụ</a> và{" "}
                <a href="#">chính sách quyền riêng tư</a>.
              </CardText>
            </FormGroup>
            <Button onClick={handleReg} className="fw-bold" color="primary">
              Đăng ký
            </Button>

            <CardText className="align-self-center mt-3">
              Đã có tài khoản?{" "}
              <Link to="/login" className="text-end">
                Đăng nhập
              </Link>
            </CardText>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Register;
