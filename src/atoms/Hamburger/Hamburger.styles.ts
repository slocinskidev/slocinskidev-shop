import styled, { css } from 'styled-components';
import breakpoint from 'utils/breakpoints';

export const Bar = styled.span`
  display: block;
  border-radius: 5px;
  width: 35px;
  height: 4px;
  background-color: ${({ theme }) => theme.color.tertiary};
  transition: ${({ theme }) => theme.transition('background-color')};

  &::before,
  &::after {
    border-radius: 5px;
    content: '';
    width: 35px;
    height: 4px;
    background-color: ${({ theme }) => theme.color.tertiary};
    display: block;
    position: absolute;
    transition: ${({ theme }) => theme.transition('transform')};
  }

  &::before {
    top: 14px;
  }

  &::after {
    bottom: 14px;
  }
`;

export const Wrapper = styled.button<{ isActive: boolean }>`
  width: 50px;
  height: 50px;
  position: relative;
  display: grid;
  place-items: center;
  justify-content: center;
  z-index: 10;
  overflow: hidden;

  @media ${breakpoint.device.md} {
    display: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      ${Bar} {
        background-color: transparent;

        &::before {
          transform: translateY(9px) rotate(45deg);
        }

        &::after {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    `}
`;
