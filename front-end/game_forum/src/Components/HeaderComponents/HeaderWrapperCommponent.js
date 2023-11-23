import React from "react";
import LogoComponent from "./LogoComponent";
import UserCtaComponent from "./UserCtaComponent";
import SearchComponent from "./SearchComponent";
import { useCurrentWidth } from "../../Hooks/useCurrentWidth";
// import { Col, Row } from "reactstrap";

function HeaderWrapperCommponent(props) {
  let width = useCurrentWidth();
  return (
    <div className="d-flex justify-content-between align-items-center header-wrapper gap-4">
      {/* <Col> */}
      <LogoComponent />
      {/* </Col> */}

      {width > 768 ? (
        // <Col>
        <SearchComponent />
      ) : // </Col>
      null}

      {/* <Col> */}
      <UserCtaComponent />
      {/* </Col> */}
    </div>
  );
}

export default HeaderWrapperCommponent;
