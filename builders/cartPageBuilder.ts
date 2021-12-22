import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CartPageQuery } from './model';

const component = resolve('src/templates/CartPage/CartPage.tsx');

export default async ({
  actions: { createPage },
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const result = await graphql<CartPageQuery>(`
    {
      cartPage: wpPage(slug: { eq: "cart" }) {
        title
        uri
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating page by GraphQL query.`);
    return;
  }

  if (!result.data) return;

  const {
    data: {
      cartPage: { title, uri },
    },
  } = result;

  createPage({
    path: uri,
    component,
    context: {
      title,
    },
  });
};
