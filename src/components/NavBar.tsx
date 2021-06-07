import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import Nav from "../styled-components/Nav";

function NavBar() {
  return (
    <Nav>
      <Logo></Logo>
    </Nav>
  );
}

export default NavBar;
