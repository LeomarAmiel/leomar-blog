import { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import * as S from "./header.styles";
import { ThemeContext } from "@context/themeProvider";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const iconColor = theme === "light" ? "rgb(46, 44, 52)" : "white";
  return (
    <S.Header>
      <Link href="/">
        <a>
          <S.LogoLink>LeomarAmiel</S.LogoLink>
        </a>
      </Link>

      <S.Button onClick={() => setTheme()}>
        {theme === "light" ? (
          <FontAwesomeIcon
            fixedWidth
            size="2x"
            color={iconColor}
            icon={faMoon}
          />
        ) : (
          <FontAwesomeIcon
            fixedWidth
            size="2x"
            color={iconColor}
            icon={faSun}
          />
        )}
      </S.Button>
    </S.Header>
  );
}
