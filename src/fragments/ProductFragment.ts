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
      onSale
    }
    ... on WpVariableProduct {
      id
      name
      price
      regularPrice
      onSale
    }
    ... on WpExternalProduct {
      id
      name
      price
      regularPrice
      onSale
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
            onSale
          }
        }
      }
    }
  }
`;
