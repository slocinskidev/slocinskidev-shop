import React, { useContext } from 'react';

import CartItem from 'molecules/CartItem';
import { CartContext } from 'providers/CartProvider';
import { isBrowser } from 'utils/isBrowser';

import { ContextType } from 'providers/model';

import { Wrapper } from './CartProducts.styles';
import PriceDetails from 'molecules/PriceDetails';

const CartProducts = () => {
  const { cart, setCart } = useContext(CartContext) as ContextType;

  const removeProductFromCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isBrowser) return null;
    console.log(e);
  };

  const renderCartItems =
    cart.products.length > 0
      ? cart.products?.map((product: CommonTypes.CartProductType) => (
          <CartItem
            key={product.id}
            product={product}
            setCart={setCart}
            removeProductFromCart={removeProductFromCart}
          />
        ))
      : null;

  return (
    <Wrapper>
      <ul>{renderCartItems}</ul>
      <PriceDetails />
    </Wrapper>
  );
};

export default CartProducts;
