import React from 'react';
import Layout from './src/layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
