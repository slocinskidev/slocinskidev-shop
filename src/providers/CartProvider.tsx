import React, { useState, createContext } from 'react';

import { ContextType } from './model';

const defaultState: ContextType = {
  cart: undefined,
  setCart: () => {},
};

export const CartContext = createContext(defaultState);

const CartProvider = ({ children }: { children?: React.ReactNode }) => {
  const [cart, setCart] = useState<ContextType['cart']>(defaultState.cart);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
