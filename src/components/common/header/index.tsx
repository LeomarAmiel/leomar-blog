import React, { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Header as StyledHeader,
  Button,
  LogoLink,
  DataWrapper,
  MobileNavWrapper,
  Nav,
  NavLink,
  NavWrapper,
  MobileNavLink,
  NightModeLink,
} from "./header.styles";
import { ThemeContext } from "@context/themeProvider";
import { useRouter } from "next/router";

const Header: FC<unknown> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [width, setWidth] = useState(0);
  const [isShowingMobileNav, setIsShowingMobileNav] = useState(false);

  useEffect(() => {
    if (window) {
      setWidth(window?.innerWidth);
    }
    function handleResize() {
      setWidth(window?.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickMobileNav = () => {
    const willShowMobileNav = !isShowingMobileNav;
    if (willShowMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    setIsShowingMobileNav(willShowMobileNav);
  };

  const onNavClick = () => {
    document.body.style.overflow = "unset";
    setIsShowingMobileNav(!isShowingMobileNav);
  };

  const router = useRouter();
  const onKeyPress = ({ target }) => {
    // I'm guessing you have value stored in state
    if (target.charCode == 13) {
      router.push("/");
    }
  };
  const iconColor = theme === "light" ? "rgb(46, 44, 52)" : "white";
  return (
    <StyledHeader>
      <DataWrapper>
        <h1>
          <Link href="/">
            <LogoLink>LeomarAmiel</LogoLink>
          </Link>
        </h1>
        Software Engineer
      </DataWrapper>

      <NavWrapper>
        {width < 500 ? (
          <div>
            <Button tabIndex={0} onClick={onClickMobileNav}>
              <FontAwesomeIcon fixedWidth color={iconColor} icon={faBars} />
            </Button>
            {isShowingMobileNav ? (
              <MobileNavWrapper>
                <Link href="/" passHref>
                  <MobileNavLink tabIndex={1} onClick={onNavClick}>
                    About me
                  </MobileNavLink>
                </Link>
                <Link href="/work">
                  <MobileNavLink tabIndex={2} onClick={onNavClick}>
                    Work
                  </MobileNavLink>
                </Link>
                <NightModeLink tabIndex={3} onClick={() => setTheme()}>
                  {theme === "light" ? "Night" : "Light"} mode
                  {theme === "light" ? (
                    <FontAwesomeIcon
                      fixedWidth
                      color={iconColor}
                      icon={faMoon}
                    />
                  ) : (
                    <FontAwesomeIcon
                      fixedWidth
                      color={iconColor}
                      icon={faSun}
                    />
                  )}
                </NightModeLink>
              </MobileNavWrapper>
            ) : null}
          </div>
        ) : (
          <>
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
          </>
        )}
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;
