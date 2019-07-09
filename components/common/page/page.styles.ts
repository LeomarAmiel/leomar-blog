import styled, { createGlobalStyle } from "styled-components";
import { ThemeColorTypes } from "constants/themes";

export const Inner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeColorTypes }>`

@font-face{ 
  font-family: "Roboto";
  src: url('/static/Roboto-Regular.ttf');
  format('ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face{ 
  font-family: "Roboto";
  src: url('/static/Roboto-Bold.ttf');
  format('ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face{ 
  font-family: "Roboto";
  src: url('/static/Roboto-Black.ttf');
  format('ttf');
  font-weight: 900;
  font-style: normal;
}

html {
  box-sizing: border-box;
  font-size: 10px;
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
  font-family: "Roboto";
  transition: background-color 200ms ease-in;

}
a {
  text-decoration: none;
}
`;
