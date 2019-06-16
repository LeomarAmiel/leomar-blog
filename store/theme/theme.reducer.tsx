import { createContext, useReducer, ReactNode } from "react";
import * as TYPES from "./theme.types";
import * as ACTIONS from "./theme.actions";
import { Action } from "@store/_core/types";

const initialState = {
  theme: "light"
};

interface IContextProps {
  state: typeof initialState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case TYPES.SET_DARK_THEME:
      return { theme: "dark" };
    case TYPES.SET_LIGHT_THEME:
      return { theme: "light" };
    default:
      return { ...state };
  }
};

interface Props {
  children: ReactNode;
}

const ThemeContext = createContext({} as IContextProps);

const ThemeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setDarkTheme = ACTIONS.setDarkTheme(dispatch);
  const setLightTheme = ACTIONS.setLightTheme(dispatch);
  const value = {
    state,
    setDarkTheme,
    setLightTheme
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const ThemeContextConsumer = ThemeContext.Consumer;

export { ThemeContextProvider, ThemeContextConsumer };
