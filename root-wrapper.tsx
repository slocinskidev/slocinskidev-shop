import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import Layout from './src/templates/layout';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => <Layout {...props}>{element}</Layout>;

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <>{element}</>
);

export { wrapPageElement, wrapRootElement };
