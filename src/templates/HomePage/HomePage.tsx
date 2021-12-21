import React from 'react';
import { graphql } from 'gatsby';

import HeroBanner from 'organisms/HeroBanner';
import ProductList from 'organisms/ProductList';
import { BUTTON } from 'atoms/Button';

import { HomePageNodesType } from './model';

import {
  StyledButton,
  StyledPageTitle,
  StyledRightArrow,
  Wrapper,
} from './HomePage.styles';

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
      <StyledButton variant={BUTTON.VARIANT.LINK} icon={<StyledRightArrow />}>
        więcej produktów
      </StyledButton>
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
