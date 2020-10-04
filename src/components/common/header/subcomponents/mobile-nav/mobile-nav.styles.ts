import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;

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

export const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 2px double ${({ theme }) => theme.text};
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
`;
