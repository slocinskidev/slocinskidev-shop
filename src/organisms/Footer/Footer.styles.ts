import Logo from 'atoms/Logo';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.color.gray6};
  padding: 4rem 2rem;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.tertiary};
  transition: ${({ theme }) => theme.transition('color')};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const StyledLogo = styled(Logo)`
  width: 40px;
  height: 40px;
  margin-bottom: 1rem;
`;
