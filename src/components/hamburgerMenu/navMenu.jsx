import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    a {
      color: #555;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a href="#">Home</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <a href="#">Products</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <a href="#">Key Benefits</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <a href="#">About</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <a href="#">FAQ</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <a href="#">Contact</a>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
