import styled, { css } from "styled-components";

export const Section = styled.section`
  padding: 0 20%;
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;
export const ListItem = styled.li<{ opacity: number; delay: number }>`
  ${({ theme, opacity, delay }) => css`
    color: ${theme.text};
    transition: opacity ${delay}ms;
    opacity: ${opacity};
    transition-delay: ${delay}ms;
    margin: 2.4rem 0;
  `}
`;
