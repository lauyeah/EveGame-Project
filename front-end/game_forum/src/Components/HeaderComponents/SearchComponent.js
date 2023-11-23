import React from "react";
import { Col, Input } from "reactstrap";

function SearchComponent(props) {
  return (
    <Col className="m-0 p-0">
      <Input
        placeholder="Tìm games, cộng đồng, bạn bè..."
        className="search-input"
      ></Input>
    </Col>
  );
}

export default SearchComponent;
