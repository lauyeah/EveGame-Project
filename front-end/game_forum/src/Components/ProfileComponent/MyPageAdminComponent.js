import React from "react";
import MyPostComponent from "../PostComponent/MyPostComponent";
import { BiBookAlt, BiLoaderCircle } from "react-icons/bi";
import { Container } from "reactstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import WaitingPostComponent from "../PostComponent/WaitingPostComponent";
import DenyingPostComponent from "../PostComponent/DenyingPostComponent";
import UserComponent from "./UserComponent";

function MyPageAdminComponent(props) {
  return (
    <Container>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active d-flex align-items-center gap-2"
            id="my-post-tab"
            data-bs-toggle="tab"
            data-bs-target="#my-post-tab-pane"
            type="button"
            role="tab"
            aria-controls="my-post-tab-pane"
            aria-selected="true"
          >
            <BiBookAlt /> Bài viết của tôi
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link d-flex align-items-center gap-2"
            id="waiting-post-tab"
            data-bs-toggle="tab"
            data-bs-target="#waiting-post-tab-pane"
            type="button"
            role="tab"
            aria-controls="waiting-post-tab-pane"
            aria-selected="false"
          >
            <BiLoaderCircle />
            Đang chờ duyệt
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link d-flex align-items-center gap-2"
            id="declined-post-tab"
            data-bs-toggle="tab"
            data-bs-target="#declined-post-tab-pane"
            type="button"
            role="tab"
            aria-controls="declined-post-tab-pane"
            aria-selected="false"
          >
            <MdDoNotDisturbAlt /> Đã từ chối duyệt
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link d-flex align-items-center gap-2"
            id="user-manager-tab"
            data-bs-toggle="tab"
            data-bs-target="#user-manager-tab-pane"
            type="button"
            role="tab"
            aria-controls="user-manager-tab-pane"
            aria-selected="false"
          >
            <FiUsers /> Quản lý thành viên
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="my-post-tab-pane"
          role="tabpanel"
          aria-labelledby="my-post-tab"
          tabindex="0"
        >
          <MyPostComponent />
        </div>
        <div
          className="tab-pane fade"
          id="waiting-post-tab-pane"
          role="tabpanel"
          aria-labelledby="waiting-post-tab"
          tabindex="0"
        >
          <WaitingPostComponent />
        </div>
        <div
          className="tab-pane fade"
          id="declined-post-tab-pane"
          role="tabpanel"
          aria-labelledby="declined-post-tab"
          tabindex="0"
        >
          <DenyingPostComponent />
        </div>
        <div
          className="tab-pane fade"
          id="user-manager-tab-pane"
          role="tabpanel"
          aria-labelledby="user-manager-tab"
          tabindex="0"
        >
          <UserComponent />
        </div>
      </div>
    </Container>
  );
}

export default MyPageAdminComponent;
