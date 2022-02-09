import React from 'react';

import { useCartQuery } from 'apolloTypes';

import { StyledBadge, StyledBasket } from './CartIcon.styles';

const CartIcon = () => {
  const { data: { cart } = { cart: undefined } } = useCartQuery({
    fetchPolicy: 'no-cache',
    ssr: false,
  });

  const totalProductsCount: number | null | undefined =
    cart && Object.keys(cart).length ? cart?.contents?.itemCount : null;

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
