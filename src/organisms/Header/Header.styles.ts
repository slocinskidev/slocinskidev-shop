import styled from 'styled-components';
import Logo from 'atoms/Logo';
import breakpoint from 'utils/breakpoints';
import Basket from 'atoms/SVG/Basket';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.variable.wrapper};
  padding: 1rem 2rem;
  margin: 0 auto;
`;

export const StyledLogo = styled(Logo)`
  width: 45px;

  @media ${breakpoint.device.md} {
    width: 280px;
  }
`;

export const StyledBasket = styled(Basket)`
  width: 40px;
  height: 40px;
`;
