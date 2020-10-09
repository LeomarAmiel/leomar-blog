import React, { FC, useContext } from "react";
import Link from "next/link";
import {
  Header as StyledHeader,
  LogoLink,
  LogoWrapper,
  NavWrapper,
} from "./header.styles";
import { ThemeContext } from "@context/themeProvider";
import MobileNav from "./subcomponents/mobile-nav/mobile-nav";
import DesktopNav from "./subcomponents/desktop-nav/desktop-nav";

const Header: FC<unknown> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const iconColor = theme === "light" ? "rgb(46, 44, 52)" : "white";

  return (
    <StyledHeader>
      <LogoWrapper>
        <h1>
          <Link href="/">
            <LogoLink>LeomarAmiel</LogoLink>
          </Link>
        </h1>
        Software Engineer
      </LogoWrapper>

      <NavWrapper>
        <DesktopNav iconColor={iconColor} theme={theme} setTheme={setTheme} />
        <MobileNav theme={theme} iconColor={iconColor} setTheme={setTheme} />
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;
