import React, { useContext } from 'react';

import Button, { BUTTON } from 'atoms/Button';
import { CartContext } from 'providers/CartProvider';
import { isBrowser } from 'utils/isBrowser';
import { addFirstProduct, updateCart } from 'utils/functions';

import { ContextType } from 'providers/model';

import { StyledRightArrow } from './AddToCartButton.styles';

const AddToCartButton = ({ product }: { product: CommonTypes.ProductType }) => {
  const { setCart } = useContext(CartContext) as ContextType;

  const handleAddToCartClick = () => {
    if (!isBrowser) return;

    const storageCart = localStorage.getItem('woo-shop-cart');

    if (storageCart) {
      const existingCart: CommonTypes.CartType = JSON.parse(storageCart);
      const qtyToBeAdded = 1;

      const updatedCart = updateCart(existingCart, product, qtyToBeAdded);
      setCart(updatedCart);
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
