import path from 'path';
import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const PROJECT_ROOT = path.resolve(__dirname, '..');

export const siteMetadata = {
  siteUrl: 'http://slocinski.dev/shop/',
  title: 'slocinskidev-shop',
};

export const plugins = [
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
      styles: path.join(PROJECT_ROOT, 'src/styles'),
      assets: path.join(PROJECT_ROOT, 'src/assets'),
      atoms: path.join(PROJECT_ROOT, 'src/atoms'),
      molecules: path.join(PROJECT_ROOT, 'src/molecules'),
      organisms: path.join(PROJECT_ROOT, 'src/organisms'),
      pages: path.join(PROJECT_ROOT, 'src/pages'),
      templates: path.join(PROJECT_ROOT, 'src/templates'),
      types: path.join(PROJECT_ROOT, 'src/types'),
      utils: path.join(PROJECT_ROOT, 'src/utils'),
      src: path.join(PROJECT_ROOT, 'src'),
      apollo: path.join(PROJECT_ROOT, 'src/apollo'),
      providers: path.join(PROJECT_ROOT, 'src/providers'),
      queries: path.join(PROJECT_ROOT, 'src/queries'),
      mutations: path.join(PROJECT_ROOT, 'src/mutations'),
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/logo/logo.png',
    },
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: 'src/assets/images/',
    },
  },
];
