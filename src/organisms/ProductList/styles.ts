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

export const ShortDescription = styled.section`
  font-size: ${({ theme }) => theme.font.size.sm};
`;
