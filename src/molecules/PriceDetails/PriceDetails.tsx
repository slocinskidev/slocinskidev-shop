import React, { useContext } from 'react';

import { CartContext } from 'providers/CartProvider';

import { ContextType } from 'providers/model';

import { Details, Heading, StyledButton, Summary, Wrapper } from './PriceDetails.styles';
import { BUTTON } from 'atoms/Button';
import { StyledRightArrow } from 'molecules/AddToCartButton/AddToCartButton.styles';

const PriceDetails = ({ cart }: { cart: CommonTypes.CartType }) => {
  return (
    <Wrapper>
      <Heading>Podsumowanie</Heading>
      <Details>
        Ilość produktów: <span>{cart?.contents.itemCount}</span>
      </Details>
      <Details>
        Wartość produktów: <span dangerouslySetInnerHTML={{ __html: cart?.subtotal! }} />
      </Details>
      <Details>
        Koszt dostawy: <span dangerouslySetInnerHTML={{ __html: cart?.shippingTotal! }} />
      </Details>
      <Summary>
        Do zapłaty: <span dangerouslySetInnerHTML={{ __html: cart?.total! }} />
      </Summary>
      <StyledButton variant={BUTTON.VARIANT.CONTAINED} icon={<StyledRightArrow />}>
        Przejdź do kasy
      </StyledButton>
    </Wrapper>
  );
};

export default PriceDetails;
