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
  const { cart } = useContext(CartContext) as ContextType;

  const IS_PRODUCT_IN_CART = cart.totalProductsCount > 0;

  const renderCartView = IS_PRODUCT_IN_CART ? (
    <CartProducts cartHeading={title} />
  ) : (
    <CartInfo cartInfo={cartInfo} />
  );

  return <Wrapper>{renderCartView}</Wrapper>;
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
