import Link from "next/link";
import * as S from "./header.styles";
import { ThemeContextConsumer } from "@store/index";

interface Props {
  onSetTheme: () => void;
}

export default function Header({ onSetTheme }: Props) {
  return (
    <S.Header>
      <S.LogoLink>
        <Link href="/">
          <a>LeomarAmiel</a>
        </Link>
      </S.LogoLink>

      <ThemeContextConsumer>
        {value => {
          console.log("value: ", value);
          return (
            <button onClick={() => value.dispatch.setDarkTheme()}>yo</button>
          );
        }}
      </ThemeContextConsumer>
    </S.Header>
  );
}
