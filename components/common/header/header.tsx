import Link from "next/link";
import * as S from "./header.styles";

export default function Header() {
  return (
    <S.Header>
      <S.LogoLink>
        <Link href="/">
          <a>LeomarAmiel</a>
        </Link>
      </S.LogoLink>
    </S.Header>
  );
}
