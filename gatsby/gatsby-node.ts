import { GatsbyNode } from 'gatsby';

import homePageBuilder from '../builders/homePageBuilder';
import productsPageBuilder from '../builders/productsPageBuilder';
import productDetailsPageBuilder from '../builders/productDetailsPageBuilder';
import cartPageBuilder from '../builders/cartPageBuilder';

export const createPages: GatsbyNode['createPages'] = async (gatsbyNode) => {
  const builders = [
    homePageBuilder,
    productsPageBuilder,
    productDetailsPageBuilder,
    cartPageBuilder,
  ].map((builder) => builder(gatsbyNode));

  await Promise.all(builders);
};
