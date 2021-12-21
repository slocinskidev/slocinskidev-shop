import { resolve } from 'path';

const component = resolve('src/templates/CartPage/CartPage.tsx');

export default async ({ createPage, graphql }) => {
  const results = await graphql(`
    {
      cartPage: wpPage(slug: { eq: "cart" }) {
        uri
        title
      }
    }
  `);

  if (results.errors) return;

  const {
    data: {
      cartPage: { title, uri },
    },
  } = results;

  createPage({
    path: uri,
    component,
    context: {
      title,
    },
  });
};
