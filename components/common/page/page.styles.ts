import styled, { createGlobalStyle } from "styled-components";
import { lightTheme } from "@utils/themes";

export const Inner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const GlobalStyle = createGlobalStyle<{ theme: typeof lightTheme }>`
html {
  box-sizing: border-box;
  font-size: 10px;
  font-family: "Helvetica"
}
*, *:before, *:after {
  box-sizing: inherit;
}
body{
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  line-height: 2;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color 200ms ease-in;

}
a {
text-decoration: none;
}
a:visited {
  color: ${({ theme }) => theme.text};
}
`;
