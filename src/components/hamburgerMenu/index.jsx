import {
  faBars,
  faHamburger,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./navMenu";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const HamburgerIcon = styled.div`
  font-size: 20px;
  color: ${({ reverseColors }) => (reverseColors ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;

  &:hover {
    color: ${({ reverseColors }) => (reverseColors ? "#3b3b3b" : "#dddddd")};
  }
`;

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transform: "translateX(100%)";
  background-color: #fff;
  box-shadow: -1px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  user-select: none;
  padding: 1em 2.5em;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 1em;
`;

const LoginButton = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #363636;
  font-size: 13px;
  font-weight: 700;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  display: flex;
  padding: 10px 12px;

  &:not(:last-of-type) {
    border-right: 1px solid #ececec;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: #000;
  }
`;

const IconContainer = styled.div`
  font-size: 14px;
  color: #363636;
  margin-right: 6px;
`;

const menuVariants = {
  open: {
    //right: "0px",
    transform: "translateX(3%)",
  },
  closed: {
    //right: "-40em",
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(4em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.01 };

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = (e) => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            <IconContainer>
              <FontAwesomeIcon icon={faUserCircle} />
            </IconContainer>
            LOGIN
          </LoginButton>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            JOIN US
          </LoginButton>
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
