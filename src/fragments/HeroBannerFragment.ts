import { graphql } from 'gatsby';

export const query = graphql`
  fragment HeroBannerFragment on WpPage_Herobanner {
    heading
    description
    image {
      ...ImageFragment
    }
    button {
      ... on WpPage {
        title
        uri
      }
    }
  }
`;
