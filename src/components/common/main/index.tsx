import { ReactNode } from "react";
import * as S from "./main.styles";

interface IProps {
  children: ReactNode;
}

export default function Main({ children }: IProps) {
  return <S.Main>{children}</S.Main>;
}
