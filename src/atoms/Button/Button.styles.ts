import styled, { css } from 'styled-components';
import { BUTTON } from 'atoms/Button';

export const Content = styled.span`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.button<{
  variant: BUTTON.VARIANT;
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
      transition: ${({ theme }) => theme.transition('border-color')};

      &:hover {
        border-color: ${({ theme }) => theme.color.secondary};
      }
    `}

    ${({ variant }) =>
    variant === BUTTON.VARIANT.ACCORDION &&
    css`
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.font.weight.medium};
      font-size: ${({ theme }) => theme.font.size.md};
      padding-left: 0;
      padding-right: 0;
      transition: ${({ theme }) => theme.transition('color')};
      display: grid;
      width: 100%;

      ${Content} {
        justify-content: space-between;
      }

      &:hover {
        color: ${({ theme }) => theme.color.secondary};
      }
    `}
`;
