import styled from 'styled-components';
import breakpoint from 'utils/breakpoints';

export const Wrapper = styled.section`
  margin: 4rem 0 10rem;
  background-color: ${({ theme }) => theme.color.gray6};

  @media ${breakpoint.device.sm} {
    padding: ${({ theme }) => theme.variable.paddingWrapper};
  }
`;
