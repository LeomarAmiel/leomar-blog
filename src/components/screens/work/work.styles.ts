import styled from "styled-components";

export const Section = styled.section`
  padding: 0 20%;
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const UnorderedList = styled.ul``;

export const ListItem = styled.li`
  color: ${(p) => p.theme.text};
  margin: 2.4rem 0;
`;
