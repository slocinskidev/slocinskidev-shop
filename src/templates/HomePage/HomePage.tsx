import React from 'react';
import { graphql } from 'gatsby';

import HeroBanner from 'organisms/HeroBanner';
import ProductList from 'organisms/ProductList';

import { HomePageNodesType } from './model';

import { StyledPageTitle, Wrapper } from './HomePage.styles';

const HomePage = ({
  data: {
    allWpProduct: { nodes: products },
  },
}: {
  data: HomePageNodesType;
}) => {
  return (
    <Wrapper>
      <HeroBanner />
      <StyledPageTitle>Ostatnio dodane produkty</StyledPageTitle>
      <ProductList products={products} />
    </Wrapper>
  );
};

export const query = graphql`
  query HomePageQuery {
    allWpProduct(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        ...ProductFragment
      }
    }
  }
`;

export default HomePage;
