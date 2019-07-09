import styled from "styled-components";
import { ThemeColorTypes } from "styles/themes";

export const Section = styled.section<{ theme: ThemeColorTypes }>`
  padding: 2rem;
  div {
    padding: 1rem;
    p {
      margin: 0;
      font-size: 1.4rem;
      a {
        color: ${({ theme }) => theme.link};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
