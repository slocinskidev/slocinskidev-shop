import React, { useContext } from 'react';

import Button, { BUTTON } from 'atoms/Button';
import { CartContext } from 'providers/CartProvider';
import { isBrowser } from 'utils/isBrowser';
import { addFirstProduct } from 'utils/functions';

import { ContextType } from 'providers/model';

import { StyledRightArrow } from './AddToCartButton.styles';

const AddToCartButton = ({ product }: { product: CommonTypes.ProductType }) => {
  const [cart, setCart] = useContext(CartContext) as ContextType;

  const handleAddToCartClick = () => {
    if (!isBrowser) return;

    const existingCart = localStorage.getItem('woo-shop-cart');

    if (existingCart) {
    } else {
      const newCart = addFirstProduct(product);
      setCart(newCart);
    }
  };

  return (
    <>
      <Button
        onClick={handleAddToCartClick}
        variant={BUTTON.VARIANT.CONTAINED}
        icon={<StyledRightArrow />}
      >
        Dodaj do koszyka
      </Button>
    </>
  );
};

export default AddToCartButton;
