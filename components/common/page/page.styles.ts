import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  text: "rgb(46, 44, 52)",
  headingText: "#3621FF",
  backgroundColor: "white"
};

export const darkTheme = {
  text: "white",
  headingText: "#EAC300",
  backgroundColor: "rgb(46, 44, 52)"
};

export const Inner = styled.div`
  max-width: 1000px;
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
    transition: background-color 500ms linear;

    }

    a {
    text-decoration: none;
    }
    a:visited {
    color: ${({ theme }) => theme.text};
    }
`;
