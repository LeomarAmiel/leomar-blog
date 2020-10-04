import { THEME_TYPE } from "@context/themeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Button, NavLink, Wrapper } from "./desktop-nav.styles";

interface IProps {
  iconColor: string;
  theme: THEME_TYPE;
  setTheme: () => void;
}

const DesktopNav: FC<IProps> = ({ theme, setTheme, iconColor }) => {
  const router = useRouter();
  return (
    <Wrapper>
      <nav>
        <Link href="/">
          <NavLink isSelected={router.pathname === "/"}>About me</NavLink>
        </Link>
        <Link href="/work">
          <NavLink isSelected={router.pathname === "/work"}>Work</NavLink>
        </Link>
      </nav>
      <Button onClick={() => setTheme()}>
        {theme === "light" ? (
          <FontAwesomeIcon fixedWidth color={iconColor} icon={faMoon} />
        ) : (
          <FontAwesomeIcon fixedWidth color={iconColor} icon={faSun} />
        )}
      </Button>
    </Wrapper>
  );
};

export default DesktopNav;
