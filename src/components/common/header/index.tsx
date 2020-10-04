import React, { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars } from "@fortawesome/free-solid-svg-icons";
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

import MobileNav from "./subcomponents/mobile-nav/mobile-nav";

const Header: FC<unknown> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [width, setWidth] = useState(0);
  const [isShowingMobileNav, setIsShowingMobileNav] = useState(false);
  const iconColor = theme === "light" ? "rgb(46, 44, 52)" : "white";

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
              <MobileNav
                theme={theme}
                onNavClick={onNavClick}
                setTheme={setTheme}
                iconColor={iconColor}
              />
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
