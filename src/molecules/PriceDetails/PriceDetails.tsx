import React from 'react';

import { BUTTON } from 'atoms/Button';

import { CartQuery } from 'apolloTypes';

import { StyledRightArrow } from 'molecules/AddToCartButton/AddToCartButton.styles';
import { Details, Heading, StyledButton, Summary, Wrapper } from './PriceDetails.styles';

type PriceDetailsProps = {
  cart: NonNullable<CartQuery['cart']>;
};

const PriceDetails = ({ cart }: PriceDetailsProps) => {
  return (
    <Wrapper>
      <Heading>Podsumowanie</Heading>
      <Details>
        Ilość produktów: <span>{cart?.contents?.itemCount}</span>
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
