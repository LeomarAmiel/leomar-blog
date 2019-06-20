import styled from "styled-components";
import { ThemeColorTypes } from "@utils/themes";

export const Section = styled.section<{ theme: ThemeColorTypes }>`
  padding: 2rem;
  div {
    padding: 1rem;
    p {
      margin: 0;
      a {
        color: ${({ theme }) => theme.link};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
