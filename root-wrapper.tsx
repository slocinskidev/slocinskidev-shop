import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ApolloProvider } from '@apollo/client';

import { client } from './src/apollo/client';
import Layout from './src/templates/layout';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);

export { wrapPageElement, wrapRootElement };
