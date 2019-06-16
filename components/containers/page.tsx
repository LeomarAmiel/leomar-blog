import { ReactNode } from "react";
import Page from "@components/common/page/page";
import Provider from "@store/_core/provider";
import { ThemeContextConsumer } from "@store/index";

interface IProps {
  children: ReactNode;
}

export default function PageContainer({ children }: IProps) {
  return (
    <Provider>
      <ThemeContextConsumer>
        {({ state: { theme }, setDarkTheme, setLightTheme }) => {
          const setTheme = theme === "light" ? setDarkTheme : setLightTheme;
          return (
            <Page theme={theme} onSetTheme={setTheme}>
              {children}
            </Page>
          );
        }}
      </ThemeContextConsumer>
    </Provider>
  );
}
