import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import Loader from 'atoms/Loader';
import CartItem from 'molecules/CartItem';
import PriceDetails from 'molecules/PriceDetails';
import CartInfo from 'molecules/CartInfo';

import GET_CART from 'queries/get-cart';
import UPDATE_CART from 'mutations/update-cart';

import { BasketSection, LoaderWrapper, StyledPageTitle, Wrapper } from './CartProducts.styles';

const CartProducts = ({
  cartHeading,
  cartInfo,
}: {
  cartHeading: string;
  cartInfo: CommonTypes.CartInfoType;
}) => {
  const { data: { cart } = { cart: undefined }, loading } = useQuery(GET_CART, {
    fetchPolicy: 'no-cache',
    ssr: false,
  });

  const [updateCart, { loading: updating }] = useMutation(UPDATE_CART, {
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

  if (cart && cart.contents.itemCount === 0) {
    return <CartInfo cartInfo={cartInfo} />;
  }

  const renderCartItems =
    cart &&
    cart?.contents.nodes?.map((product: CommonTypes.CartProductType) => (
      <CartItem
        key={product.key}
        product={product}
        loading={updating}
        onUpdate={(values) => updateCart({ variables: values })}
      />
    ));

  return (
    <Wrapper>
      <BasketSection>
        <StyledPageTitle>{cartHeading}</StyledPageTitle>
        <ul>{renderCartItems}</ul>
      </BasketSection>
      <PriceDetails cart={cart} />
    </Wrapper>
  );
};

export default CartProducts;
