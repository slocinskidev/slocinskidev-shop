import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { ProductsPageQuery } from './model';

const component = resolve('src/templates/ProductsPage/ProductsPage.tsx');

export default async ({
  actions: { createPage },
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const result = await graphql<ProductsPageQuery>(`
    {
      productsPage: wpPage(slug: { eq: "products" }) {
        title
        uri
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating page by GraphQL query.`);
    return;
  }

  if (!result.data) return null;

  const {
    data: {
      productsPage: { title, uri },
    },
  } = result;

  createPage({
    path: uri,
    component,
    context: {
      title,
      uri,
    },
  });
};
