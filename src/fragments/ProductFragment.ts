import { graphql } from 'gatsby';

export const ProductFragment = graphql`
  fragment ProductFragment on WpProduct {
    id
    link
    description
    galleryImages {
      nodes {
        ...ImageFragment
      }
    }
    image {
      ...ImageFragment
    }
    productCategories {
      nodes {
        id
        name
      }
    }
    ... on WpSimpleProduct {
      id
      name
      price
    }
    ... on WpVariableProduct {
      id
      name
      price
    }
    ... on WpExternalProduct {
      id
      name
      price
      externalUrl
    }
    ... on WpGroupProduct {
      id
      name
      products {
        nodes {
          ... on WpSimpleProduct {
            id
            name
            price
          }
        }
      }
    }
  }
`;
