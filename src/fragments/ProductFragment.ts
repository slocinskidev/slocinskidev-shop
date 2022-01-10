import { graphql } from 'gatsby';

export const ProductFragment = graphql`
  fragment ProductFragment on WpProduct {
    link
    description
    productId: databaseId
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
      productId: databaseId
      name
      price
      regularPrice
      onSale
    }
    ... on WpVariableProduct {
      productId: databaseId
      name
      price
      regularPrice
      onSale
    }
    ... on WpExternalProduct {
      productId: databaseId
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
            productId: databaseId
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
