import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline;
      color: ${({ theme }) => theme.text};
      padding: 2rem;
      border-width: 0 1px 0 0;
      border-color: ${({ theme }) => theme.text};
      border-style: solid;
    }
    &:first-child {
    }
  }
`;

export { Nav };
