import styled from 'styled-components';
import Logo from 'atoms/Logo';
import breakpoint from 'utils/breakpoints';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.variable.wrapper};
  padding: 1rem 2rem;
  margin: 0 auto;
`;

export const StyledLogo = styled(Logo)`
  display: flex;
  width: 45px;

  @media ${breakpoint.device.md} {
    display: none;
  }
`;

export const StyledDesktopLogo = styled(Logo)`
  display: none;

  @media ${breakpoint.device.md} {
    display: flex;
    width: 280px;
  }
`;
