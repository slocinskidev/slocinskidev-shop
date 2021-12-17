const path = require('path');

const component = path.resolve('src/templates/ProductsPage/ProductsPage.tsx');

module.exports = async ({ createPage, graphql }) => {
  const {
    data: {
      wpPage: { id, title, uri, content },
    },
  } = await graphql(`
    {
      wpPage(slug: { eq: "products" }) {
        id
        title
        content
        uri
      }
    }
  `);

  createPage({
    path: uri,
    component,
    context: {
      id,
      title,
      uri,
      content,
    },
  });
};
