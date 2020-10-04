import { THEME_TYPE } from "@context/themeProvider";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  MobileNavLink,
  MobileNavWrapper,
  NightModeLink,
  Wrapper,
} from "./mobile-nav.styles";

interface IProps {
  theme: THEME_TYPE;
  iconColor: string;
  setTheme: () => void;
}

const MobileNav: React.FC<IProps> = ({ theme, iconColor, setTheme }) => {
  const [isShowingMobileNav, setIsShowingMobileNav] = useState(false);

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
  return (
    <Wrapper>
      <Button tabIndex={0} onClick={onClickMobileNav}>
        <FontAwesomeIcon fixedWidth color={iconColor} icon={faBars} />
      </Button>
      {isShowingMobileNav ? (
        <MobileNavWrapper>
          <Link href="/">
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
              <FontAwesomeIcon fixedWidth color={iconColor} icon={faMoon} />
            ) : (
              <FontAwesomeIcon fixedWidth color={iconColor} icon={faSun} />
            )}
          </NightModeLink>
        </MobileNavWrapper>
      ) : null}
    </Wrapper>
  );
};

export default MobileNav;
