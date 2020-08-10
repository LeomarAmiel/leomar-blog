import { useContext } from "react";
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

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
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
            <NavLink>About me</NavLink>
          </Link>
          <Link href="/">
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="/">
            <NavLink>Blogs</NavLink>
          </Link>
          <Link href="/">
            <NavLink>Contact</NavLink>
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
