import styled from 'styled-components';
import Basket from 'atoms/SVG/Basket';
import Badge from 'atoms/Badge';

export const StyledBadge = styled(Badge)`
  position: absolute;
  bottom: 5px;
  right: 5px;

  span {
    font-size: 1.2rem;
  }
`;

export const StyledBasket = styled(Basket)`
  position: relative;
  width: 40px;
  height: 40px;
`;
