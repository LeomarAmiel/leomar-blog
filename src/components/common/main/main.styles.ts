import styled from "styled-components";

export const StyledMain = styled.main`
  min-height: calc(100vh - 136px);
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
  padding-bottom: 4rem;
`;
