import styled, { css } from 'styled-components';
import breakpoint from 'utils/breakpoints';

export const Wrapper = styled.nav<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 9;
  color: ${({ theme }) => theme.color.tertiary};
  visibility: hidden;
  opacity: 0;
  transition: ${({ theme }) => theme.transition('opacity')},
    ${({ theme }) => theme.transition('visibility')};

  @media ${breakpoint.device.md} {
    opacity: 1;
    visibility: visible;
    position: relative;
    justify-content: end;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const NavList = styled.ul`
  font-size: ${({ theme }) => theme.font.size.md};

  @media ${breakpoint.device.md} {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  margin: 2rem 0;
  padding: 1rem 2rem;
  transition: ${({ theme }) => theme.transition('color')};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  .active {
    color: ${({ theme }) => theme.color.secondary};
  }
`;
