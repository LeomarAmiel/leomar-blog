import { ThemeColorTypes } from "@styles/themes";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
    visibility: hidden;
  }
`;

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

export const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 2px double ${({ theme }) => theme.text};
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.activeBackgroundColor};
`;
