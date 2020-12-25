import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.8em;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  font-size: 18px;
  height: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 240ms ease-in-out;

  a {
    text-decoration: none;
    color: #363636;
    transition: all 180ms ease-in-out;

    &:hover {
      color: #555;
    }
  }
`;

const menuItemVariants = {
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
            hide: {
              ...menuItemVariants.hide,
              transition: {
                delay: 0.05,
                duration: 0.05,
              },
            },
            show: {
              ...menuItemVariants.show,
              transition: {
                delay: 0.3,
                duration: 0.2,
              },
            },
          }}
        >
          <a href="#">Home</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            hide: {
              ...menuItemVariants.hide,
              transition: {
                delay: 0.1,
                duration: 0.05,
              },
            },
            show: {
              ...menuItemVariants.show,
              transition: {
                delay: 0.4,
                duration: 0.2,
              },
            },
          }}
        >
          <a href="#">Products</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            hide: {
              ...menuItemVariants.hide,
              transition: {
                delay: 0.15,
                duration: 0.05,
              },
            },
            show: {
              ...menuItemVariants.show,
              transition: {
                delay: 0.5,
                duration: 0.2,
              },
            },
          }}
        >
          <a href="#">Key Benefits</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            hide: {
              ...menuItemVariants.hide,
              transition: {
                delay: 0.2,
                duration: 0.05,
              },
            },
            show: {
              ...menuItemVariants.show,
              transition: {
                delay: 0.6,
                duration: 0.2,
              },
            },
          }}
        >
          <a href="#">About</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            hide: {
              ...menuItemVariants.hide,
              transition: {
                delay: 0.25,
                duration: 0.05,
              },
            },
            show: {
              ...menuItemVariants.show,
              transition: {
                delay: 0.7,
                duration: 0.2,
              },
            },
          }}
        >
          <a href="#">FAQ</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            hide: {
              ...menuItemVariants.hide,
              transition: {
                delay: 0.3,
                duration: 0.05,
              },
            },
            show: {
              ...menuItemVariants.show,
              transition: {
                delay: 0.8,
                duration: 0.2,
              },
            },
          }}
        >
          <a href="#">Contact</a>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
