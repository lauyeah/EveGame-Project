import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { IoIosMail, IoIosNotifications } from "react-icons/io";
import { BsLock, BsPerson, BsPersonExclamation } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut, BiMoon } from "react-icons/bi";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchLoginAPI } from "../../Redux/Action/LoginAction";
import _avatar from "../../Assets/Images/default-avatar.jpg";

function UserCtaComponent({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let disPatchRedux = useDispatch();

  useEffect(() => {
    disPatchRedux(actionFetchLoginAPI());
  }, []);

  let storeRedux = useSelector((state) => state);
  let user = storeRedux.user;

  let handleLogout = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("pwd", "");
    window.location.reload();
  };

  let handleLogin = () => {
    window.location.replace("http://localhost:3000/login");
  };

  let handleReg = () => {
    window.location.replace("http://localhost:3000/register");
  };

  let handleMyProfile = () => {
    window.location.replace("http://localhost:3000/profile");
  };

  let handleMyPage = () => {
    window.location.replace("http://localhost:3000/manager");
  };

  return user.id ? (
    <Row className="text-nowrap d-flex justify-content-end">
      <Col className="d-flex justify-content-end py-1">
        <Link to="/createPost">
          <Button color="primary" className="new-post">
            Viết Post Mới
          </Button>
        </Link>
      </Col>
      <Col className="d-flex justify-content-end py-1">
        <Row className="d-flex flex-nowrap gap-2">
          <Col style={{ width: "40px" }} className="col-4">
            <Button className="mail-icon rounded-circle">
              <IoIosMail />
            </Button>
          </Col>
          <Col style={{ width: "40px" }} className="col-4">
            <Button className="rounded-circle noti-icon">
              <IoIosNotifications />
            </Button>
          </Col>
          <Col className="col-4">
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <DropdownToggle caret className="user-cta p-0 btn-light">
                <img
                  src={user.avatar ? user.avatar : _avatar}
                  alt="avata"
                  height={40}
                  width={40}
                  className="rounded-circle object-fit-cover"
                />
              </DropdownToggle>
              <DropdownMenu {...args}>
                <DropdownItem
                  className="d-flex align-items-center gap-3"
                  onClick={handleMyPage}
                >
                  <BsPerson className="fs-4" />
                  Trang quản lý
                </DropdownItem>
                <DropdownItem
                  className="d-flex align-items-center gap-3"
                  onClick={handleMyProfile}
                >
                  <BsPersonExclamation className="fs-4" />
                  Thông tin cá nhân
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  className="d-flex align-items-center gap-3"
                  onClick={handleMyProfile}
                >
                  <BsLock className="fs-4" />
                  Thay đổi mật khẩu
                </DropdownItem>
                <DropdownItem className="d-flex align-items-center gap-3">
                  <AiOutlineSetting className="fs-4" />
                  Cài đặt khác
                </DropdownItem>
                <DropdownItem className="d-flex align-items-center gap-3">
                  <BiMoon className="fs-4" />
                  Giao diện: Sáng
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  className="d-flex align-items-center gap-3"
                  onClick={handleLogout}
                >
                  <BiLogOut className="fs-4" />
                  Đăng xuất
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <Row className="text-nowrap d-flex justify-content-end">
      <Col className="d-flex justify-content-end py-1">
        <Row className="d-flex flex-nowrap gap-2">
          <Col>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              direction={direction}
            >
              <DropdownToggle caret className="user-cta p-0 btn-light">
                <img
                  src={_avatar}
                  alt="avata"
                  height={40}
                  width={40}
                  className="rounded-circle object-fit-cover"
                />
              </DropdownToggle>
              <DropdownMenu {...args}>
                <DropdownItem
                  className="d-flex align-items-center gap-3"
                  onClick={handleLogin}
                >
                  Đăng nhập tài khoản
                </DropdownItem>
                <DropdownItem
                  className="d-flex align-items-center gap-3"
                  onClick={handleReg}
                >
                  Đăng ký tài khoản mới
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
UserCtaComponent.propTypes = {
  direction: PropTypes.string,
};

export default UserCtaComponent;
