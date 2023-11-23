import React from "react";
import MyPostComponent from "../PostComponent/MyPostComponent";
import { BiBookAlt } from "react-icons/bi";
import { Container } from "reactstrap";

function MyPageMemberComponent(props) {
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
      </div>
    </Container>
  );
}

export default MyPageMemberComponent;
