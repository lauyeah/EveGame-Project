import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { actionCloseConfirmModal } from "../../Redux/Action/ConfirmModalAction";
import { actionDeletePostAPI } from "../../Redux/Action/PostAction";

function ConfirmComponent(props) {
  let { postId } = props;

  let disPatchRedux = useDispatch();
  let stateRedux = useSelector((state) => state);
  let isOpen = stateRedux.confirmModal;

  let handleConfirm = async () => {
    await disPatchRedux(actionDeletePostAPI(postId));
    disPatchRedux(actionCloseConfirmModal());
    window.location.reload();
  };

  let handleCancel = () => {
    disPatchRedux(actionCloseConfirmModal());
  };
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader className="d-flex justify-content-center">
        Xóa bài viết này?
      </ModalHeader>
      <ModalBody className="d-flex gap-3 justify-content-center">
        <Button color="danger" onClick={handleConfirm}>
          Xóa
        </Button>
        <Button onClick={handleCancel}>Hủy</Button>
      </ModalBody>
    </Modal>
  );
}

export default ConfirmComponent;
