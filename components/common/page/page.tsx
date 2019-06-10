import { Fragment, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import Provider from "@store/_core/provider";
import { ThemeContextConsumer } from "@store/index";
import * as S from "./page.styles";
import { Header, Meta } from "../";

interface IProps {
  children: ReactNode;
}

export default function Page({ children }: IProps) {
  const [theme, setTheme] = useState("light");
  return (
    <Provider>
      <ThemeContextConsumer>
        {({ state }) => (
          <ThemeProvider
            theme={state.theme === "light" ? S.lightTheme : S.darkTheme}
          >
            <Fragment>
              <S.GlobalStyle />
              <Meta />
              <Header
                onSetTheme={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
              />
              <S.Inner>{children}</S.Inner>
            </Fragment>
          </ThemeProvider>
        )}
      </ThemeContextConsumer>
    </Provider>
  );
}
