import { useState } from "react";

export type ThemeType = "blogs" | "about" | "work";

export function useTabs(initVal: ThemeType) {
  const [value, setValue] = useState(initVal);

  function handleChange(tab: ThemeType) {
    return () => {
      setValue(tab);
    };
  }

  return {
    value,
    onChange: handleChange
  };
}
