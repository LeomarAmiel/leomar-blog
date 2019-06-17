import styled from "styled-components";

export const Main = styled.main`
  max-width: 80rem;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
  flex: 1;
`;
