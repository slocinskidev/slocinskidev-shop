import React from 'react';
import { graphql } from 'gatsby';

import ProductList from 'organisms/ProductList';

import { ProductsPageNodesType } from './model';

import { Wrapper, StyledPageTitle } from './ProductsPage.styles';

const ProductsPage = ({
  data: {
    productsPage: { title },
    allWpProduct: { nodes: products },
  },
}: {
  data: ProductsPageNodesType;
}) => {
  return (
    <Wrapper>
      <StyledPageTitle>{title}</StyledPageTitle>
      <ProductList products={products} />
    </Wrapper>
  );
};

export const query = graphql`
  query ProductsPageQuery {
    productsPage: wpPage(slug: { eq: "products" }) {
      title
      content
    }
    allWpProduct {
      nodes {
        ...ProductFragment
      }
    }
  }
`;

export default ProductsPage;
