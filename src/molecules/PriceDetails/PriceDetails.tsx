import React, { useContext } from 'react';

import { CartContext } from 'providers/CartProvider';

import { ContextType } from 'providers/model';

import { Details, Heading, StyledButton, Summary, Wrapper } from './PriceDetails.styles';
import { BUTTON } from 'atoms/Button';
import { StyledRightArrow } from 'molecules/AddToCartButton/AddToCartButton.styles';

const PriceDetails = () => {
  const { cart } = useContext(CartContext) as ContextType;

  return (
    <Wrapper>
      <Heading>Podsumowanie</Heading>
      <Details>
        Ilość produktów: <span>{cart.totalProductsCount}</span>
      </Details>
      <Details>
        Wartość produktów: <span>{cart.totalProductsPrice.toFixed(2)} zł</span>
      </Details>
      <Summary>
        Do zapłaty: <span>{cart.totalProductsPrice.toFixed(2)} zł</span>
      </Summary>
      <StyledButton variant={BUTTON.VARIANT.CONTAINED} icon={<StyledRightArrow />}>
        Przejdź do kasy
      </StyledButton>
    </Wrapper>
  );
};

export default PriceDetails;
