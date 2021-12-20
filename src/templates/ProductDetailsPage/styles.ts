import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from 'atoms/Button';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.variable.paddingWrapper};
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: 2rem 0 1rem;
`;

export const Description = styled.section`
  font-size: ${({ theme }) => theme.font.size.sm};
  margin-bottom: 4rem;
`;

export const PriceSection = styled.section`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-bottom: 2rem;
`;

export const Price = styled.section`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const RegularPrice = styled.section`
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.gray3};
  text-decoration: line-through;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  height: 400px;
`;

export const CategoriesList = styled.ul`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
`;
