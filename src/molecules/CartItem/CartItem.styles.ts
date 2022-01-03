import Button from 'atoms/Button';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const Wrapper = styled.li`
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray6};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 2fr min-content;

  align-items: start;
  gap: 1rem;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  width: 150px;
  height: 150px;
`;

export const Content = styled.div`
  display: grid;
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

export const Quantity = styled.input`
  width: 40px;
`;
