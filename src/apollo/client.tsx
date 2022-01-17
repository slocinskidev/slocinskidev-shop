import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';

import { isBrowser } from 'utils/isBrowser';

const httpLink = new HttpLink({
  uri: process.env.GATSBY_SHOP_GRAPHQL,
  fetch,
});

export const wooSessionMiddleware = new ApolloLink((operation, forward) => {
  // Don't run this while Gatsby is building. Window is not defined
  // @ref: https://www.gatsbyjs.org/docs/debugging-html-builds/
  if (!isBrowser) {
    return forward(operation);
  }

  /**
   * If session data exists in local storage, set value as session header.
   */
  const session = window.localStorage.getItem('woo-session');
  if (session) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        'woocommerce-session': `Session ${session}`,
      },
    }));
  }

  return forward(operation);
});

export const wooSessionAfterware = new ApolloLink((operation, forward) => {
  if (!isBrowser) {
    return forward(operation);
  }

  return forward(operation).map((response) => {
    const context = operation.getContext();

    const {
      response: { headers },
    } = context;

    const session = headers.get('woocommerce-session');

    // Bail if no session was sent
    if (!session) {
      return response;
    }

    // Bail if we already have the session
    if (window.localStorage.getItem('woo-session') === session) {
      return response;
    }

    // Set WC session to localStorage
    window.localStorage.setItem('woo-session', session);

    return response;
  });
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Cart: {
        keyFields: ['total'], // cart doesn't have an id, so per docs we need to track it somehow to make cache work as expected. This warning came up during coupons on the cart page
      },
    },
  }),
  link: from([wooSessionMiddleware, wooSessionAfterware, httpLink]),
});
