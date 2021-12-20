import { resolve } from 'path';

const component = resolve(
  'src/templates/ProductDetailsPage/ProductDetailsPage.tsx'
);

export default async ({ createPage, graphql }) => {
  const results = await graphql(`
    {
      allWpProduct {
        nodes {
          id
          link
          name
        }
      }
    }
  `);

  if (results.errors) return;

  const {
    data: {
      allWpProduct: { nodes: products },
    },
  } = results;

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
