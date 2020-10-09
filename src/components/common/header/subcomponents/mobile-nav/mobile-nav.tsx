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

const links = [
  {
    href: "/",
    label: "About me",
  },
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

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
          {links.map(({ href, label }, index) => (
            <Link href={href} key={href}>
              <MobileNavLink tabIndex={index + 1} onClick={onNavClick}>
                {label}
              </MobileNavLink>
            </Link>
          ))}
          <NightModeLink tabIndex={links.length + 1} onClick={() => setTheme()}>
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
