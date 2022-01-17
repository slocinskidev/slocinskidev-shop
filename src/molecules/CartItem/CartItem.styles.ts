import Button from 'atoms/Button';
import Select from 'react-select';
import styled, { css } from 'styled-components';

export const Wrapper = styled.li<{ loading: boolean }>`
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray6};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: auto 2fr min-content;
  gap: 2rem;

  ${({ loading }) =>
    loading &&
    css`
      opacity: 0.4;
    `}
`;

export const StyledImage = styled.img`
  min-width: 75px;
  max-width: 150px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  justify-self: center;
`;

export const Content = styled.div`
  display: grid;
  align-content: space-evenly;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const DeleteButton = styled(Button)`
  margin-top: -1.4rem;
  margin-right: -1.4rem;
  width: 44px;
  height: 44px;
  display: flex;

  &:hover {
    &::before,
    &::after {
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }

  &::before,
  &::after {
    content: '';
    border-radius: 5px;
    top: 50%;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.color.tertiary};
    display: block;
    position: absolute;
    transition: ${({ theme }) => theme.transition('background-color')};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const ShortDescription = styled.section`
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 80px;
    border: 2px solid ${({ theme }) => theme.color.gray6};
    cursor: pointer;
    transition: ${({ theme }) => theme.transition('border-color')};
  }

  .Select__control:hover {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }

  .Select__control--is-focused {
    border: 2px solid ${({ theme }) => theme.color.secondary};
    box-shadow: none;
    outline: none;
  }

  .Select__control--is-selected {
    outline: none !important;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    width: 60px;
  }

  .Select__option {
    transition: ${({ theme }) => theme.transition('background-color')},
      ${({ theme }) => theme.transition('color')};
  }

  .Select__option:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.secondary};
  }

  .Select__option--is-selected {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Price = styled.section`
  margin-top: 1rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.sm};
`;
