import { createContext, useReducer, ReactNode } from "react";
import * as TYPES from "./types";
import * as ACTIONS from "./actions";
import { Action } from "@store/_core/types";

const initialState = {
  theme: "light"
};

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

const ThemeContext = createContext({ state: initialState });

const ThemeContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setDarkTheme = ACTIONS.setDarkTheme(dispatch);
  const setLightTheme = ACTIONS.setDarkTheme(dispatch);
  const value = {
    state,
    dispatch: {
      setDarkTheme,
      setLightTheme
    }
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const ThemeContextConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer };
