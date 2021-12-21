import React from 'react';
import { graphql } from 'gatsby';

import HeroBanner from 'organisms/HeroBanner';
import RecentProducts from 'organisms/RecentProducts';

import { HomePageNodesType } from './model';

import { Wrapper } from './HomePage.styles';

const HomePage = ({
  data: {
    homePage: { heroBanner, recentProductsSection },
    allWpProduct: { nodes: products },
  },
}: {
  data: HomePageNodesType;
}) => {
  return (
    <Wrapper>
      <HeroBanner heroBanner={heroBanner} />
      <RecentProducts {...recentProductsSection} products={products} />
    </Wrapper>
  );
};

export const query = graphql`
  query HomePageQuery {
    homePage: wpPage(slug: { eq: "homepage" }) {
      heroBanner {
        ...HeroBannerFragment
      }
      recentProductsSection {
        recentProductsHeading
        recentProductsButton {
          title
          url
        }
      }
    }
    allWpProduct(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        ...ProductFragment
      }
    }
  }
`;

export default HomePage;
