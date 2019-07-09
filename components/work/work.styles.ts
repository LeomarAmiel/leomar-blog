import styled from "styled-components";
import { ThemeColorTypes } from "styles/themes";

export const Section = styled.section<{ theme: ThemeColorTypes }>`
  padding: 2rem;
  div {
    padding: 1rem;
    h4 {
      font-size: 2.4rem;
      margin: 0;
    }
    p {
      margin: 0;
    }

    a {
      color: ${({ theme }) => theme.link};
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: ${({ theme }) => theme.link};
      }
    }
  }
`;

export const BulletList = styled.ul`
  padding-left: 2rem;

  li {
    font-size: 1.4rem;
  }
`;
