const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'http://slocinski.dev/shop/',
    title: 'slocinskidev-shop',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: process.env.GATSBY_SHOP_GRAPHQL,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        styles: path.join(__dirname, 'src/styles'),
        assets: path.join(__dirname, 'src/assets'),
        atoms: path.join(__dirname, 'src/atoms'),
        molecules: path.join(__dirname, 'src/molecules'),
        organisms: path.join(__dirname, 'src/organisms'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        types: path.join(__dirname, 'src/types'),
        utils: path.join(__dirname, 'src/utils'),
        src: path.join(__dirname, 'src'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
  ],
};
