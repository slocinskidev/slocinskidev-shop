import React, { useContext } from 'react';

import { CartContext } from 'providers/CartProvider';

import { ContextType } from 'providers/model';

// import { Wrapper } from './PriceDetails.styles';

const PriceDetails = () => {
  const { cart } = useContext(CartContext) as ContextType;
  //TODO: add summary price when delivery cost will be
  return (
    <div>
      <h3>Do zapłaty</h3>
      <h4>Ilość produktów: {cart.totalProductsCount}</h4>
      <h4>Przesyłka: ...</h4>
      <h4>Do zapłaty: {cart.totalProductsPrice} zł</h4>
    </div>
  );
};

export default PriceDetails;
