import { Fragment, ReactNode } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header, Meta } from "../";

const theme = {
  headerText: "black",
  bodyText: "black"
};

const GlobalStyle = createGlobalStyle`
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
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    color: black;
  }
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

interface IProps {
  children: ReactNode;
}

export default function Page({ children }: IProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Header />
          <Inner>{children}</Inner>
        </>
      </ThemeProvider>
    </Fragment>
  );
}
