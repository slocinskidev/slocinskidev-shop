import { resolve } from 'path';

const component = resolve('src/templates/HomePage/HomePage.tsx');

export default async ({ createPage, graphql }) => {
  const results = await graphql(`
    {
      homePage: wpPage(slug: { eq: "homepage" }) {
        id
        title
        content
        date
        uri
        slug
      }
    }
  `);

  if (results.errors) return;

  const {
    data: {
      homePage: { title },
    },
  } = results;

  createPage({
    path: '/',
    component,
    context: {
      title,
    },
  });
};
