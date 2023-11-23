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
} from "reactstrap";
import { Link } from "react-router-dom";

function ResetPwd(props) {
  let [email, setEmail] = useState("");
  let handleResetPwd = () => {
    console.log("lừa thôii");
  };
  return (
    <Container className="pt-5 reset-pwd-form d-flex justify-content-center">
      <Card>
        <CardHeader className="bg-body px-4 py-3">
          <CardText className="fw-bold">
            <h5 className="m-0">Quên mật khẩu??!</h5>
          </CardText>
        </CardHeader>
        <CardBody className="d-flex flex-column p-0">
          <Form className="px-4 py-3 d-flex flex-column gap-3">
            <Input
              type="email"
              placeholder="Nhập email đăng ký để lấy lại mật khẩu..."
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></Input>

            <Button
              onClick={handleResetPwd}
              className="fw-bold"
              color="primary"
            >
              Tiếp tục...
            </Button>

            <CardText className="align-self-center">
              Tổ tiên đã giúp bạn nhớ ra?{" "}
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

export default ResetPwd;
