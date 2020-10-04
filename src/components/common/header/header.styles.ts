import styled from "styled-components";

export const Header = styled.header`
  max-width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
`;

export const LogoLink = styled.a`
  font-weight: 900;
  display: inline;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
