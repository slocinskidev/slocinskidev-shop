import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import breakpoint from 'utils/breakpoints';

export const List = styled.ul`
  display: grid;
  gap: 6rem;

  @media ${breakpoint.device.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media ${breakpoint.device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
