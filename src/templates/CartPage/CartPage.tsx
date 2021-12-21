import React from 'react';
import { graphql } from 'gatsby';

import CartInfo from 'molecules/CartInfo';

import { CartPageNodesType } from './model';

import { Wrapper, StyledPageTitle } from './CartPage.styles';

const ProductsPage = ({
  data: {
    cartPage: { title, cartInfo },
  },
}: {
  data: CartPageNodesType;
}) => {
  return (
    <Wrapper>
      <StyledPageTitle>{title}</StyledPageTitle>
      <CartInfo cartInfo={cartInfo} />
    </Wrapper>
  );
};

export const query = graphql`
  query CartPageQuery {
    cartPage: wpPage(slug: { eq: "cart" }) {
      title
      cartInfo {
        ...CartInfoFragment
      }
    }
  }
`;

export default ProductsPage;
