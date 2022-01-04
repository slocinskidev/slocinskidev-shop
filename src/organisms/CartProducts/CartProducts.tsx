import React, { useContext } from 'react';

import CartItem from 'molecules/CartItem';
import PriceDetails from 'molecules/PriceDetails';
import { CartContext } from 'providers/CartProvider';
import { isBrowser } from 'utils/isBrowser';
import { removeItemsFromCart } from 'utils/functions';

import { ContextType } from 'providers/model';

import { BasketSection, StyledPageTitle, Wrapper } from './CartProducts.styles';

const CartProducts = ({ cartHeading }: { cartHeading: string }) => {
  const { cart, setCart } = useContext(CartContext) as ContextType;

  const removeProductFromCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    if (!isBrowser) return null;
    const updatedCart = removeItemsFromCart(id);

    if (!updatedCart) return null;

    setCart(updatedCart);
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
      <BasketSection>
        <StyledPageTitle>{cartHeading}</StyledPageTitle>
        <ul>{renderCartItems}</ul>
      </BasketSection>
      <PriceDetails />
    </Wrapper>
  );
};

export default CartProducts;
