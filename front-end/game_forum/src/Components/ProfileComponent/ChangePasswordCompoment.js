import React, { useState } from "react";
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
import { actionCloseChangePwdModal } from "../../Redux/Action/ChangePwdAction";
import { actionChangePwdAPI } from "../../Redux/Action/UserAction";
import { api } from "../../Api/api";

function ChangePasswordCompoment(props) {
  let [wrongPwdModal, setWrongPwdModal] = useState(false);
  let [notMatchPwdModal, setNotMatchPwdModal] = useState(false);
  let [changedPwdModal, setChangedPwdModal] = useState(false);

  let handleCloseWrongPwdModal = () => {
    setWrongPwdModal(false);
  };
  let handleOpenWrongPwdModal = () => {
    setWrongPwdModal(true);
  };

  let handleCloseNotMatchPwdModal = () => {
    setNotMatchPwdModal(false);
  };
  let handleOpenNotMatchPwdModal = () => {
    setNotMatchPwdModal(true);
  };

  let handleCloseChangedPwdModal = () => {
    setChangedPwdModal(false);
    window.location.reload();
  };

  let [oldPwd, setOldPwd] = useState("");
  let [newPwd, setNewPwd] = useState("");
  let [confirmPwd, setConfirmPwd] = useState("");

  let handleChangePwd = async () => {
    if (oldPwd == "" || newPwd == "" || confirmPwd == "") {
      console.log("Vui lòng điền đủ thông tin");
    } else if (newPwd != confirmPwd) {
      handleOpenNotMatchPwdModal();
    } else {
      let form = {
        userId: user.id,
        info: {
          oldPassword: oldPwd,
          newPassword: newPwd,
          confirmPassword: confirmPwd,
        },
      };

      let auth = {
        username: user.username,
        password: oldPwd,
      };
      let userCk = await api("GET", "auth/login", null, auth);
      if (userCk) {
        // console.log("Ck pwd OK");

        await disPatchRedux(actionChangePwdAPI(form));
        setChangedPwdModal(true);
        // disPatchRedux(actionCloseChangePwdModal());
        // window.location.reload();
      } else {
        handleOpenWrongPwdModal(true);
      }
    }
  };

  let stateRedux = useSelector((state) => state);
  let changePwdModal = stateRedux.changePwdModal;
  let user = stateRedux.user;

  let disPatchRedux = useDispatch();
  let handleCancel = () => {
    disPatchRedux(actionCloseChangePwdModal());
  };

  return (
    <div>
      <Modal isOpen={changePwdModal}>
        <ModalHeader>Thay đổi mật khẩu</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="old-pwd">Nhập mật khẩu cũ:</Label>
              <Input
                id="old-pwd"
                onChange={(e) => {
                  setOldPwd(e.target.value);
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="new-pwd">Nhập mật khẩu mới:</Label>
              <Input
                id="new-pwd"
                type="password"
                onChange={(e) => {
                  setNewPwd(e.target.value);
                }}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="confirm-pwd">Nhập lại mật khẩu:</Label>
              <Input
                id="confirm-pwd"
                type="password"
                onChange={(e) => {
                  setConfirmPwd(e.target.value);
                }}
              ></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleChangePwd}>
            Cập nhật
          </Button>
          <Button onClick={handleCancel}>Hủy</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={wrongPwdModal}>
        <ModalHeader>Sai mật khẩu!</ModalHeader>
        <ModalFooter>
          <Button onClick={handleCloseWrongPwdModal}>Đóng</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={notMatchPwdModal}>
        <ModalHeader>Mật khẩu không trùng khớp!</ModalHeader>
        <ModalFooter>
          <Button onClick={handleCloseNotMatchPwdModal}>Đóng</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={changedPwdModal}>
        <ModalHeader>Đổi mật khẩu thành công!</ModalHeader>
        <ModalFooter>
          <Button onClick={handleCloseChangedPwdModal}>Đóng</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ChangePasswordCompoment;
