const path = require('path');

const component = path.resolve('src/templates/HomePage/HomePage.tsx');

module.exports = async ({ createPage, graphql }) => {
  const {
    data: {
      wpPage: { title },
    },
  } = await graphql(`
    {
      wpPage(slug: { eq: "homepage" }) {
        id
        title
        content
        date
        uri
        slug
      }
    }
  `);

  createPage({
    path: '/',
    component,
    context: {
      title,
    },
  });
};
