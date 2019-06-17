import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import * as S from "./header.styles";

interface Props {
  onSetTheme: () => void;
  theme: string;
}

export default function Header({ onSetTheme, theme }: Props) {
  const iconColor = theme === "light" ? "rgb(46, 44, 52)" : "white";
  return (
    <S.Header>
      <Link href="/">
        <a>
          <S.LogoLink>LeomarAmiel</S.LogoLink>
        </a>
      </Link>

      <S.Button onClick={onSetTheme}>
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
