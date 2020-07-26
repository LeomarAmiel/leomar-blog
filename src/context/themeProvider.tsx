import { ReactElement, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@styles/themes";

export enum THEME_TYPE {
  light = "light",
  dark = "dark",
}

interface IProps {
  children?: ReactElement;
}

export const ThemeContext = createContext({
  theme: THEME_TYPE.light,
  setTheme: () => {},
});

function Provider({ children }: IProps) {
  const [theme, setTheme] = useState(THEME_TYPE.light);
  const handleSetTheme = () => {
    setTheme(theme === THEME_TYPE.light ? THEME_TYPE.dark : THEME_TYPE.light);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      <ThemeProvider theme={theme === THEME_TYPE.dark ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Provider;
