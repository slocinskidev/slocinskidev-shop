import React from 'react';

import Loader from 'atoms/Loader';
import CartItem from 'molecules/CartItem';
import PriceDetails from 'molecules/PriceDetails';
import CartInfo from 'molecules/CartInfo';

import { useCartQuery, useUpdateCartMutation } from 'apolloTypes';

import { BasketSection, LoaderWrapper, StyledPageTitle, Wrapper } from './CartProducts.styles';

const CartProducts = ({
  cartHeading,
  cartInfo,
}: {
  cartHeading: string;
  cartInfo: CommonTypes.CartInfoType;
}) => {
  const { data: { cart } = { cart: undefined }, loading } = useCartQuery({
    fetchPolicy: 'no-cache',
    ssr: false,
  });

  const [updateCart, { loading: updating }] = useUpdateCartMutation({
    refetchQueries: ['Cart'],
    awaitRefetchQueries: true,
  });

  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  if (cart?.contents?.itemCount === 0) {
    return <CartInfo cartInfo={cartInfo} />;
  }

  const renderCartItems = cart?.contents?.nodes?.map((product) => {
    if (!product) return null;

    return (
      <CartItem
        key={product.key}
        product={product}
        loading={updating}
        onUpdate={(values) => updateCart({ variables: values })}
      />
    );
  });

  const renderPriceDetails = cart ? <PriceDetails cart={cart} /> : null;

  return (
    <Wrapper>
      <BasketSection>
        <StyledPageTitle>{cartHeading}</StyledPageTitle>
        <ul>{renderCartItems}</ul>
      </BasketSection>
      {renderPriceDetails}
    </Wrapper>
  );
};

export default CartProducts;
