import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProductDetailsPage = ({ data: { product } }) => {
  return (
    <section>
      <h2>{product.name}</h2>
    </section>
  );
};

export const query = graphql`
  query ProductDetailsQuery($id: String) {
    product: wpProduct(id: { eq: $id }) {
      name
      description
    }
  }
`;

export default ProductDetailsPage;
