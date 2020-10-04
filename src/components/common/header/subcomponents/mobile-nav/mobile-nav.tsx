import { THEME_TYPE } from "@context/themeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import {
  MobileNavLink,
  MobileNavWrapper,
  NightModeLink,
} from "./mobile-nav.styles";

interface IProps {
  theme: THEME_TYPE;
  iconColor: string;
  onNavClick: () => void;
  setTheme: () => void;
}

const MobileNav: React.FC<IProps> = ({
  theme,
  onNavClick,
  setTheme,
  iconColor,
}) => {
  return (
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
  );
};

export default MobileNav;
