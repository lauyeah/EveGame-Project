import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

function ErrPage(props) {
  return (
    <Container>
      <Col
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Row className="d-flex justify-content-center text-secondary">
          <CiWarning style={{ fontSize: "69px" }} />
          <Row className="d-flex justify-content-center">Ôi, hỏng!</Row>
          <Row className="d-flex justify-content-center mb-3">
            Không tìm thấy trang bạn yêu cầu :-(
          </Row>
          <Row>
            <Col className="text-center">
              <Link to={"/"}>
                <Button color="primary">Trang chủ</Button>
              </Link>
            </Col>
          </Row>
        </Row>
      </Col>
    </Container>
  );
}

export default ErrPage;
