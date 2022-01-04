import React, { useContext } from 'react';

import { CartContext } from 'providers/CartProvider';
import { ContextType } from 'providers/model';

import { StyledBadge, StyledBasket } from './CartIcon.styles';

const CartIcon = () => {
  const { cart } = useContext(CartContext) as ContextType;

  const totalProductsCount: number | null =
    cart && Object.keys(cart).length ? cart.totalProductsCount : null;

  const renderBadge = totalProductsCount ? (
    <StyledBadge>
      <span>{totalProductsCount}</span>
    </StyledBadge>
  ) : null;

  return (
    <>
      <StyledBasket />
      {renderBadge}
    </>
  );
};

export default CartIcon;
