import { ReactNode } from "react";
import { StyledMain } from "./main.styles";

interface IProps {
  children: ReactNode;
}

export default function Main({ children }: IProps) {
  return <StyledMain>{children}</StyledMain>;
}
