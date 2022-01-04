import styled from 'styled-components';
import Logo from 'atoms/Logo';
import Button from 'atoms/Button';
import breakpoint from 'utils/breakpoints';
import { StyledBadge } from 'molecules/CartIcon/CartIcon.styles';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.variable.wrapper};
  padding: 1rem 2rem;
  margin: 0 auto;

  .active {
    color: ${({ theme }) => theme.color.secondary};

    ${StyledBadge} {
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }
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

export const CartButton = styled(Button)`
  &:hover {
    ${StyledBadge} {
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }
`;
