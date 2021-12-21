import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import breakpoint from 'utils/breakpoints';

export const List = styled.ul`
  display: grid;

  @media ${breakpoint.device.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media ${breakpoint.device.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.font.size.md};
  margin: 2rem 0 1rem;
`;

export const PriceSection = styled.section`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.xs};
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
