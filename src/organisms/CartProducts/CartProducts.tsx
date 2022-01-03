import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import { CartContext } from 'providers/CartProvider';

import { ContextType } from 'providers/model';

import { Wrapper } from './CartProducts.styles';
import CartItem from 'molecules/CartItem';

const CartProducts = () => {
  const [cart, setCart] = useContext(CartContext) as ContextType;

  const renderCartItems =
    cart.products.length > 0
      ? cart.products?.map((product: CommonTypes.CartProductType) => (
          <CartItem key={product.id} product={product} setCart={setCart} />
        ))
      : null;

  return (
    <Wrapper>
      <ul>{renderCartItems}</ul>
    </Wrapper>
  );
};

export default CartProducts;
