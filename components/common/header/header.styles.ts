import styled from "styled-components";

const Header = styled.header`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const LogoLink = styled.h1`
  font-weight: 900;
  display: inline;
`;

const Button = styled.button`
  width: 10rem;
  height: 4rem;
  border: 3px double ${({ theme }) => theme.text};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const ButtonImage = styled.img`
  height: 3rem;
  width: 3rem;
  color: ${({ theme }) => theme.backgroundColor};
`;

export { Header, LogoLink, Button, ButtonImage };
