import homePageBuilder from '../src/create-page/homePageBuilder';
import productsPageBuilder from '../src/create-page/productsPageBuilder';
import productDetailsPageBuilder from '../src/create-page/productDetailsPageBuilder';
import cartPageBuilder from '../src/create-page/cartPageBuilder';

export const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const builders = [
    homePageBuilder,
    productsPageBuilder,
    productDetailsPageBuilder,
    cartPageBuilder,
  ].map((builder) =>
    builder({
      createPage,
      graphql,
    })
  );

  await Promise.all(builders);
};
