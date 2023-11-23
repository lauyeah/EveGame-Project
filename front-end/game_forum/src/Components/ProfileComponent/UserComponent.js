import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Modal,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { getAllUser } from "../../Api/UserApi";
import { AiOutlineEdit } from "react-icons/ai";
import {
  BsPersonFillCheck,
  BsPersonFillLock,
  BsPersonFillSlash,
} from "react-icons/bs";
import { api } from "../../Api/api";
import { auth } from "../../Api/config";

function UserComponent(props) {
  let [userList, setUserList] = useState([]);
  useEffect(() => {
    async function getUser() {
      let userList = await getAllUser();
      setUserList(userList.content);
    }
    getUser();
  }, []);

  let gender = (gender) => {
    switch (gender) {
      case "MALE":
        return "Nam";
      case "FEMALE":
        return "Nữ";
      default:
        return "Giới tính khác";
    }
  };

  let handleActiveUser = async (id) => {
    let endPoint = "users/active/" + id;
    await api("PUT", endPoint, null, auth);
    window.location.reload();
  };

  let handleLockUser = async (id) => {
    let endPoint = "users/lock/" + id;
    await api("PUT", endPoint, null, auth);
    window.location.reload();
  };

  let handleDeleteUser = async (id) => {
    // let endPoint = "users/" + id;
    // await api("DELETE", endPoint, null, auth);
    // window.location.reload();
  };

  let [delModal, setDelModal] = useState(false);
  let [isDel, setIsDel] = useState(false);

  let onHandleDeleteUser = (id) => {
    setDelModal(true);
    if (isDel) {
      console.log("isDel", isDel);
      console.log("id", id);
    }
  };

  let items = "";

  items = userList.map((user, index) => {
    return (
      <tr>
        <th scope="row">
          {/* {user.id} */}
          <img
            src={user.avatar}
            height={32}
            width={32}
            className="rounded object-fit-cover"
          />
        </th>
        <td>{user.username}</td>
        <td>{user.fullname}</td>
        <td>{user.email}</td>
        <td>{gender(user.gender)}</td>
        <td>{user.role}</td>
        <td>
          {user.activation ? (
            <span className="text-success">Đã kích hoạt</span>
          ) : (
            <span className="text-danger">Chưa kích hoạt</span>
          )}
        </td>
        <td>
          <div className="dropdown">
            <Button
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              color="light"
              className="rounded"
              size="sm"
            >
              <AiOutlineEdit className="fs-5" />
            </Button>

            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <Button
                className="dropdown-item"
                id={user.id}
                onClick={(event) => {
                  handleActiveUser(event.target.id);
                }}
              >
                <BsPersonFillCheck id={user.id} className="text-success fs-4" />
                <span id={user.id}> Kích hoạt tài khoản</span>
              </Button>

              <Button
                className="dropdown-item"
                id={user.id}
                onClick={(event) => {
                  handleLockUser(event.target.id);
                }}
              >
                <BsPersonFillLock id={user.id} className="text-warning fs-4" />
                <span id={user.id}> Khóa tài khoản</span>
              </Button>

              <Button
                className="dropdown-item"
                id={user.id}
                onClick={(event) => {
                  onHandleDeleteUser(event.target.id);
                }}
              >
                <BsPersonFillSlash id={user.id} className="text-danger fs-4" />
                <span id={user.id}> Xóa tài khoản</span>
              </Button>
            </div>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <Container className="table-responsive">
      <Modal isOpen={delModal}>
        <ModalHeader>Bạn có chắc chắn muốn xóa không?</ModalHeader>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              setIsDel(true);
              setDelModal(false);
            }}
          >
            Xóa
          </Button>
          <Button
            onClick={() => {
              setDelModal(false);
            }}
          >
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Tên đầy đủ</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Chức vụ</th>
            <th>Tình trạng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    </Container>
  );
}

export default UserComponent;
