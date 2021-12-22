import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { HomePageQuery } from './model';

const component = resolve('src/templates/HomePage/HomePage.tsx');

export default async ({
  actions: { createPage },
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const result = await graphql<HomePageQuery>(`
    {
      homePage: wpPage(slug: { eq: "homepage" }) {
        title
        uri
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating page by GraphQL query.`);
    return;
  }

  if (!result.data) return;

  const {
    data: {
      homePage: { title },
    },
  } = result;

  createPage({
    path: '/',
    component,
    context: {
      title,
    },
  });
};
