import { useState } from "react";

export type ThemeType = "blogs" | "about";

export function useTabs(initVal: ThemeType) {
  const [value, setValue] = useState(initVal);

  function handleChange() {
    setValue(value === "blogs" ? "about" : "blogs");
  }

  return {
    value,
    onChange: handleChange
  };
}
