import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="d-flex gap-2">
      <Link to={"/"}>Home</Link>
      <Link to={"/topics"}>Topic</Link>
    </div>
  );
}

export default Nav;
