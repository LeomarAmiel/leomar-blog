import styled from "styled-components";
import { ThemeColorTypes } from "@styles/themes";

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

export const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 2px double ${({ theme }) => theme.text};
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
`;

export const ButtonImage = styled.img`
  height: 3rem;
  width: 3rem;
  color: ${({ theme }) => theme.backgroundColor};
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export const Nav = styled.nav``;

export const NavLink = styled.a<{
  isSelected: boolean;
  theme: ThemeColorTypes;
}>`
  margin-right: 1.2rem;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.active : theme.inactiveTabText};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  text-decoration: underline;
  cursor: pointer;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
