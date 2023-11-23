import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

function LogoComponent(props) {
  return (
    <div className="logo">
      <Link to={"/"}>
        <span className="d-flex align-items-center">
          <Col className="evegame-logo rounded-circle">
            <img
              src="https://i.ibb.co/dtLRs2z/logo.png"
              width={40}
              height={40}
              alt="logo"
            />
          </Col>
          <Col className="evegame-text text-nowrap">
            <Row className="text-name">EveGame</Row>
            <Row className="text-sub">ALL GAME THINGS</Row>
          </Col>
        </span>
      </Link>
    </div>
  );
}

export default LogoComponent;
