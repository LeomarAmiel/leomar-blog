import { useState } from "react";

export type ThemeType = "light" | "dark";

export function useTheme(initVal: ThemeType) {
  const [value, setValue] = useState(initVal);

  function handleChange() {
    setValue(value === "light" ? "dark" : "light");
  }

  return {
    value,
    onChange: handleChange
  };
}
