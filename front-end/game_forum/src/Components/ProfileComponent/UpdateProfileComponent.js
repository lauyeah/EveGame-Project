import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { actionCloseUpdateProfileModal } from "../../Redux/Action/UpdateProfileModalAction";
import { actionFetchLoginAPI } from "../../Redux/Action/LoginAction";
import { actionUpdateUserAPI } from "../../Redux/Action/UserAction";

function UpdateProfileComponent(props) {
  let stateRedux = useSelector((state) => state);
  let isOpen = stateRedux.updateProfileModal;
  let user = stateRedux.user;

  let disPatchRedux = useDispatch();

  let handleProfileUpdate = async () => {
    let updatedUser = {
      id: user.id,
      info: {
        username: user.username,
        email: email ? email : user.email,
        avatar: avatar ? avatar : user.avatar,
        phone: phone ? phone : user.phone,
        fullname: fullname ? fullname : user.fullname,
        gender: gender ? gender : user.gender,
        dateOfBirth: user.dateOfBirth,
      },
    };

    await disPatchRedux(actionUpdateUserAPI(updatedUser));
    await disPatchRedux(actionFetchLoginAPI());
    disPatchRedux(actionCloseUpdateProfileModal());
  };
  let handleCancel = () => {
    disPatchRedux(actionCloseUpdateProfileModal());
  };

  let [avatar, setAvatar] = useState("");
  let [fullname, setFullname] = useState(user.fullname);
  let [email, setEmail] = useState(user.email);
  let [phone, setPhone] = useState(user.phone);
  let [gender, setGender] = useState(user.gender);

  useEffect(() => {
    setAvatar(user.avatar);
  }, []);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>Cập nhật thông tin cá nhân</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="new-avatar">Nhập đường dẫn ảnh đại diện:</Label>
            <Input
              id="new-avatar"
              defaultValue={user.avatar}
              onChange={(event) => {
                setAvatar(event.target.value);
              }}
              onLoad={(event) => {
                setAvatar(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="new-fullname">Tên đầy đủ:</Label>
            <Input
              id="new-fullname"
              defaultValue={user.fullname}
              onChange={(event) => {
                setFullname(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="new-email">Email:</Label>
            <Input
              id="new-email"
              defaultValue={user.email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="new-phone">Số điện thoại:</Label>
            <Input
              id="new-phone"
              defaultValue={user.phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            ></Input>
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
              <option value={"MALE"}>Nam</option>
              <option value={"FEMALE"}>Nữ</option>
              <option value={"OTHER"}>Giới tính khác</option>
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleProfileUpdate}>
          Cập nhật
        </Button>
        <Button onClick={handleCancel}>Hủy</Button>
      </ModalFooter>
    </Modal>
  );
}

export default UpdateProfileComponent;
