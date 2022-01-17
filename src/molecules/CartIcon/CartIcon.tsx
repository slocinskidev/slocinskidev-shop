import React from 'react';
import { useQuery } from '@apollo/client';

import GET_CART from 'queries/get-cart';

import { StyledBadge, StyledBasket } from './CartIcon.styles';

const CartIcon = () => {
  const { data: { cart } = { cart: undefined } } = useQuery(GET_CART, {
    fetchPolicy: 'no-cache',
    ssr: false,
  });

  const totalProductsCount: number | null =
    cart && Object.keys(cart).length ? cart.contents.itemCount : null;

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
