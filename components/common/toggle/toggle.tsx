import * as S from "./toggle.styles";

interface Props {
  children: React.ReactNode;
}

function Toggle({ children }: Props) {
  return <S.Button>{children}</S.Button>;
}

export default Toggle;
