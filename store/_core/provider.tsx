import { ReactNode } from "react";
import { ThemeContextProvider } from "../";

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default Provider;
