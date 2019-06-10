import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  height: 56px;
  min-width: 120px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;
