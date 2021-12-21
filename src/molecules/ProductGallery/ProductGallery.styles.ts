import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import breakpoint from 'utils/breakpoints';

export const StyledGatsbyImage = styled(GatsbyImage)`
  height: 400px;
`;

export const Wrapper = styled.div`
  @media ${breakpoint.device.md} {
    padding: ${({ theme }) => theme.variable.paddingWrapper};
  }
`;
