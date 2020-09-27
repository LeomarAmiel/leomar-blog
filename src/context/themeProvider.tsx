import { createContext, useState, FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@styles/themes";

export enum THEME_TYPE {
  light = "light",
  dark = "dark",
}

interface IProps {
  children?: ReactNode;
}

export const ThemeContext = createContext({
  theme: THEME_TYPE.light,
  setTheme: () => {},
});

const Provider: FC<IProps> = ({ children }) => {
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
};

export default Provider;
