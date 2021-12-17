import homePageBuilder from '../src/create-page/homePageBuilder';
import productsPageBuilder from '../src/create-page/productsPageBuilder';

export const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const builders = [homePageBuilder, productsPageBuilder].map((builder) =>
    builder({
      createPage,
      graphql,
    })
  );

  await Promise.all(builders);
};
