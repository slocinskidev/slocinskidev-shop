import { resolve } from 'path';

const component = resolve('src/templates/ProductsPage/ProductsPage.tsx');

export default async ({ createPage, graphql }) => {
  const results = await graphql(`
    {
      productsPage: wpPage(slug: { eq: "products" }) {
        title
        uri
      }
    }
  `);

  if (results.errors) return;

  const {
    data: {
      productsPage: { title, uri },
    },
  } = results;

  createPage({
    path: uri,
    component,
    context: {
      title,
      uri,
    },
  });
};
