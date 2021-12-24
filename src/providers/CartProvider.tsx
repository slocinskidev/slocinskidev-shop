import React, { useState, useEffect, createContext } from 'react';
import { isBrowser } from 'utils/isBrowser';

export const CartContext = createContext({});

const CartProvider = ({ children }: { children?: React.ReactNode }) => {
  const [cart, setCart] = useState<CommonTypes.CartType | {}>([{}, () => {}]);
  console.log('Cart: ', cart);

  useEffect(() => {
    if (!isBrowser) return;

    const storageCartData = localStorage.getItem('woo-shop-cart');

    const cartData: CommonTypes.CartType | {} = storageCartData
      ? JSON.parse(storageCartData)
      : {};

    setCart(cartData);
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
