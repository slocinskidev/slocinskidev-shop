import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import CartInfo from 'molecules/CartInfo';
import CartProducts from 'organisms/CartProducts';
import { CartContext } from 'providers/CartProvider';

import { ContextType } from 'providers/model';
import { CartPageNodesType } from './model';

import { Wrapper } from './CartPage.styles';

const ProductsPage = ({
  data: {
    cartPage: { title, cartInfo },
  },
}: {
  data: CartPageNodesType;
}) => {
  return (
    <Wrapper>
      <CartProducts cartHeading={title} cartInfo={cartInfo} />
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
