import { graphql } from 'gatsby';

export const query = graphql`
  fragment CartInfoFragment on WpPage_Cartinfo {
    image {
      ...ImageFragment
    }
    noProductText
    noProductDescription
    button {
      ... on WpPage {
        id
        title
        uri
      }
    }
  }
`;
