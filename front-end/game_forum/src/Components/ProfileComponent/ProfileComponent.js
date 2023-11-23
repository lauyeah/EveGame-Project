import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import UpdateProfileComponent from "./UpdateProfileComponent";
import { actionOpenUpdateProfileModal } from "../../Redux/Action/UpdateProfileModalAction";
import ChangePasswordCompoment from "./ChangePasswordCompoment";
import { actionOpenChangePwdModal } from "../../Redux/Action/ChangePwdAction";

function ProfileComponent(props) {
  let stateRedux = useSelector((state) => state);
  let user = stateRedux.user;

  let handleGender = () => {
    switch (user.gender) {
      case "MALE":
        return "Nam";
      case "FEMALE":
        return "Nữ";
      case "OTHER":
        return "Giới tính khác";
      default:
        break;
    }
  };

  let disPatchRedux = useDispatch();
  let handleUpdateModal = () => {
    disPatchRedux(actionOpenUpdateProfileModal());
  };

  let handleChangePwd = () => {
    disPatchRedux(actionOpenChangePwdModal());
  };
  return (
    <Container className="pt-3">
      <UpdateProfileComponent />
      <ChangePasswordCompoment />
      {user.id ? (
        <Card>
          <CardHeader className="d-flex justify-content-center">
            <h5 className="m-0 p-0">Thông tin cá nhân</h5>
          </CardHeader>
          <CardBody>
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Ảnh đại diện:</Col>
              <Col className="d-flex align-items-center">
                <img
                  width={96}
                  height={96}
                  src={user.avatar}
                  alt="avatar"
                  className="object-fit-cover"
                />
              </Col>
            </Row>
            <hr />
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Username:</Col>
              <Col className="d-flex align-items-center">{user.username}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Tên đầy đủ:</Col>
              <Col className="d-flex align-items-center">{user.fullname}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Email:</Col>
              <Col className="d-flex align-items-center">{user.email}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Số điện thoại:</Col>
              <Col className="d-flex align-items-center">{user.phone}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Giới tính:</Col>
              <Col className="d-flex align-items-center">{handleGender()}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Ngày sinh:</Col>
              <Col className="d-flex align-items-center">
                {user.dateOfBirth}
              </Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Ngày gia nhập:</Col>
              <Col className="d-flex align-items-center">{user.joinDate}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Chức vụ:</Col>
              <Col className="d-flex align-items-center">{user.role}</Col>
            </Row>

            <Row className="d-flex justify-content-center align-items-center">
              <Col className="text-end">Tình trạng:</Col>
              <Col className="d-flex align-items-center">
                {user.activation ? "Đã kích hoạt" : "Chưa kích hoạt"}
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="d-flex justify-content-end gap-2">
            <Button color="warning" onClick={handleChangePwd}>
              Đổi mật khẩu
            </Button>
            <Button color="primary" onClick={handleUpdateModal}>
              Cập nhật
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <span className="d-flex">
          <Link to={"/login"}>Vui lòng đăng nhập</Link>
        </span>
      )}
    </Container>
  );
}

export default ProfileComponent;
