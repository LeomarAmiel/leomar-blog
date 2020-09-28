import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import {
  Header as StyledHeader,
  Button,
  LogoLink,
  DataWrapper,
  Nav,
  NavLink,
  NavWrapper,
} from "./header.styles";
import { ThemeContext } from "@context/themeProvider";
import { useRouter } from "next/router";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const router = useRouter();
  console.log(router.pathname);
  const iconColor = theme === "light" ? "rgb(46, 44, 52)" : "white";
  return (
    <StyledHeader>
      <DataWrapper>
        <h1>
          <Link href="/">
            <LogoLink>LeomarAmiel</LogoLink>
          </Link>
        </h1>
        JavaScript Developer
      </DataWrapper>

      <NavWrapper>
        <Nav>
          <Link href="/">
            <NavLink isSelected={router.pathname === "/"}>About me</NavLink>
          </Link>
          <Link href="/work">
            <NavLink isSelected={router.pathname === "/work"}>Work</NavLink>
          </Link>
        </Nav>
        <Button onClick={() => setTheme()}>
          {theme === "light" ? (
            <FontAwesomeIcon fixedWidth color={iconColor} icon={faMoon} />
          ) : (
            <FontAwesomeIcon fixedWidth color={iconColor} icon={faSun} />
          )}
        </Button>
      </NavWrapper>
    </StyledHeader>
  );
}
