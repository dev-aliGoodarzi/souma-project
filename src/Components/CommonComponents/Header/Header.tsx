// React
import React from "react";
// React

// CSS
import styles from "./Header.module.css";
// CSS

// Styled Component
import {
  Button1,
  Container as _Container,
} from "../../StyledComponents/StyledComponents";
// Styled Component

// Images
import { logo } from "../../../Images";
import { NavLink } from "react-router-dom";
// Images

const LoginButton = Button1();
const Container = _Container();

console.log(Container);

type T_Link = {
  path: string;
  text: string;
};

const links: T_Link[] = [
  {
    path: "/",
    text: "خانه",
  },
  {
    path: "/1",
    text: "مسیر 1",
  },
  {
    path: "/2",
    text: "مسیر 2",
  },
  {
    path: "/3",
    text: "مسیر 3",
  },
  {
    path: "/4",
    text: "مسیر 4",
  },
];

const Header = () => {
  return (
    <Container className={`${styles.headerContainer}`}>
      <LoginButton>ورود</LoginButton>
      <Container gap="48px" className="rtl">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `${isActive && "activeLink"}`}
          >
            {link.text}
          </NavLink>
        ))}
      </Container>
      <img src={logo} alt="" />
    </Container>
  );
};

export default Header;
