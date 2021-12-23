import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ApolloProvider } from '@apollo/client';

import { client } from './src/apollo/client';
import CartProvider from './src/providers/CartProvider';
import Layout from './src/templates/layout';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => <Layout {...props}>{element}</Layout>;

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <CartProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </CartProvider>
);

export { wrapPageElement, wrapRootElement };
