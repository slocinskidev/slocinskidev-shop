import React, { FC } from 'react';
import { graphql } from 'gatsby';

import HeroBanner from 'organisms/HeroBanner';

const ProductsPage = ({ pageContext }: any) => {
  return (
    <>
      <HeroBanner />
      {pageContext.title}
    </>
  );
};

export default ProductsPage;
