import React, { FC } from "react";
import { StyledMain } from "./main.styles";

const Main: FC<unknown> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
