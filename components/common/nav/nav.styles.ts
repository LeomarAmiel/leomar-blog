import styled from "styled-components";
import { ThemeColorTypes } from "styles/themes";

const Nav = styled.nav<{ theme: ThemeColorTypes }>`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      display: inline;
      & > button {
        border-width: 0 1px 0 0;
        border-style: solid;
        border-color: black;
        color: ${({ theme }) => theme.text};
        background-color: transparent;
        font-size: 1.4rem;
        padding: 2rem;
        width: 10rem;
        font-weight: 700;

        &:focus {
          outline: none;
          color: ${({ theme }) => theme.active};
          font-weight: 700;
        }
      }
      .active {
        background-color: ${({ theme }) => theme.activeBackgroundColor};
      }
      .inactive {
        color: ${({ theme }) => theme.inactiveTabText};
        font-weight: 400;
      }
    }
  }
`;

export { Nav };
