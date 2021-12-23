import { graphql } from 'gatsby';

export const ProductFragment = graphql`
  fragment ProductFragment on WpProduct {
    id
    link
    description
    databaseId
    nodeType
    shortDescription
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
      regularPrice
    }
    ... on WpVariableProduct {
      id
      name
      price
      regularPrice
    }
    ... on WpExternalProduct {
      id
      name
      price
      regularPrice
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
            regularPrice
          }
        }
      }
    }
  }
`;
