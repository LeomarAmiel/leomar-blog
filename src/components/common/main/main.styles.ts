import styled from "styled-components";

export const Main = styled.main`
  max-width: 80rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
  flex: 1;
`;
