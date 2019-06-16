import { Fragment, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./page.styles";
import { Header, Meta } from "../";
import { lightTheme, darkTheme } from "@utils/themes";

interface IProps {
  children: ReactNode;
  theme: string;
  onSetTheme: () => void;
}

export default function Page({ children, theme, onSetTheme }: IProps) {
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <S.GlobalStyle />
        <Meta />
        <Header theme={theme} onSetTheme={onSetTheme} />
        <S.Inner>{children}</S.Inner>
      </Fragment>
    </ThemeProvider>
  );
}
