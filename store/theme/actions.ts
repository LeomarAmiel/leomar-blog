import * as TYPES from "./types";

export function setDarkTheme(dispatch: React.Dispatch<any>) {
  return () => {
    dispatch({
      type: TYPES.SET_DARK_THEME
    });
  };
}

export function setLightTheme(dispatch: React.Dispatch<any>) {
  return () => {
    return dispatch({
      type: TYPES.SET_LIGHT_THEME
    });
  };
}
