import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Wrapper = styled.li`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: 2rem 0 1rem;
`;

export const PriceSection = styled.section`
  display: grid;
  place-content: start;
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-bottom: 2rem;
`;

export const Price = styled.section`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.size.md};
`;

export const RegularPrice = styled.section`
  color: ${({ theme }) => theme.color.gray3};
  text-decoration: line-through;
`;

export const StyledGatsbyImage = styled(GatsbyImage)`
  aspect-ratio: 2 / 3;
`;

export const ShortDescription = styled.section`
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.5;
  margin-bottom: 2rem;
`;
