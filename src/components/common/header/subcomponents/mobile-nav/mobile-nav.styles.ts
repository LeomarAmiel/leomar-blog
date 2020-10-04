import styled from "styled-components";

export const MobileNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  opacity: 0.95;
  flex-direction: column;
`;

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.active};
  padding: 2rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  text-decoration: underline;
`;

export const NightModeLink = styled.button`
  color: ${({ theme }) => theme.active};
  background-color: transparent;
  padding: 2rem;
  font-size: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-y: hidden;
  text-decoration: underline;
`;
