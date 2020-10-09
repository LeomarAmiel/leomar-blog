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

export const ListItemHeading = styled.h5`
  font-size: 1.7rem;
  color: ${(p) => p.theme.text};
`;

export const ListItemParagraph = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.text};
`;

export const ListItemDate = styled.p`
  font-size: 1rem;
  margin-top: -0.2rem;
  margin-bottom: 0.4rem;
  color: ${(p) => p.theme.inactiveTabText};
`;
