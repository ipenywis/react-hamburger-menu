import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../hamburgerMenu";

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <HamburgerMenu />
    </NavbarContainer>
  );
}
