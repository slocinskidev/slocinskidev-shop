import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { ProductDetailsPageQuery } from './model';

const component = resolve(
  'src/templates/ProductDetailsPage/ProductDetailsPage.tsx'
);

export default async ({
  actions: { createPage },
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const result = await graphql<ProductDetailsPageQuery>(`
    {
      productDetailsPage: allWpProduct {
        nodes {
          id
          link
          name
        }
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
      productDetailsPage: { nodes: products },
    },
  } = result;

  products.forEach(({ id, link, name }) => {
    createPage({
      path: link,
      component,
      context: {
        id,
        name,
        link,
      },
    });
  });
};
