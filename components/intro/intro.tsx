import * as S from "./intro.styles";

export default function Intro() {
  return (
    <S.Intro>
      <S.Image src={"/static/leomaramiel.jpeg"} alt="my cute image" />
      <S.TextWrapper>
        <S.Text>Hi, I'm Leomar Amiel. This is my personal blog.</S.Text>
      </S.TextWrapper>
    </S.Intro>
  );
}
