import styled, { css } from 'styled-components';
import { BUTTON } from 'atoms/Button';

export const Wrapper = styled.button<{
  variant: BUTTON.VARIANT;
  isIcon?: boolean;
}>`
  position: relative;
  display: inline-flex;
  color: ${({ theme }) => theme.color.tertiary};
  background-color: transparent;
  border: 2px solid transparent;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.6rem;
  appearance: none;
  outline: none;

  ${({ variant }) =>
    variant === BUTTON.VARIANT.LINK &&
    css`
      margin-left: -1rem;
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
        color: ${({ theme }) => theme.color.secondary};
      }
    `}

  ${({ variant }) =>
    variant === BUTTON.VARIANT.CONTAINED &&
    css`
      padding: 1rem 3rem;
      border-radius: 0.4rem;
      background-color: ${({ theme }) => theme.color.primary};
      border-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
      transition: ${({ theme }) => theme.transition('background-color')},
        ${({ theme }) => theme.transition('border-color')};

      &:hover {
        background-color: ${({ theme }) => theme.color.secondary};
        border-color: ${({ theme }) => theme.color.secondary};
      }
    `}

  ${({ variant }) =>
    variant === BUTTON.VARIANT.OUTLINE &&
    css`
      border-radius: ${({ theme }) => theme.variable.borderRadiusRound};
      border-color: ${({ theme }) => theme.color.gray6};
      transition: ${({ theme }) => theme.transition('transform')};

      &:hover {
        transform: scale(1.1);
      }
    `}
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
`;

export const Label = styled.span``;