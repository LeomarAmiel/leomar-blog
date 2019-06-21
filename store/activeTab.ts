import { useState } from "react";

export type TabType = "blogs" | "about" | "work";

export function useTabs(initVal: TabType) {
  const [value, setValue] = useState(initVal);

  function handleChange(tab: TabType) {
    return () => {
      setValue(tab);
    };
  }

  return {
    value,
    onChange: handleChange
  };
}
