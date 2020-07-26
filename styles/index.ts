import styled, { createGlobalStyle } from "styled-components";

export const Inner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const GlobalStyle = createGlobalStyle`

@font-face{ 
  font-family: "Montserrat";
  src: url('/public/static/Montserrat-Regular.ttf');
  format('ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face{ 
  font-family: "Montserrat";
  src: url('/public/static/Montserrat-Bold.ttf');
  format('ttf');
  font-weight: 700;
  font-style: normal;
}

html {
  font-family: sans-serif; 
}

body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}


blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}

button {
  background: transparent;
  padding: 0;
}


fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; 
}

*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}

* {
  transition: background-color 2s ease;
  transition: color 0.5s ease;
}
`;
