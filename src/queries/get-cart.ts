import { gql } from '@apollo/client';

const GET_CART = gql`
  query Cart {
    cart(recalculateTotals: true) {
      contents(first: 50) {
        itemCount
        nodes {
          key
          product {
            node {
              id
              slug
              databaseId
              name
              shortDescription
              sku
              image {
                altText
                sizes(size: SHOP_CATALOG)
                sourceUrl(size: SHOP_CATALOG)
                srcSet(size: SHOP_CATALOG)
              }
              ... on SimpleProduct {
                price
                stockQuantity
                stockStatus
              }
              ... on VariableProduct {
                price
                stockQuantity
                stockStatus
              }
            }
          }
          variation {
            node {
              stockQuantity
              stockStatus
              attributes {
                nodes {
                  id
                  name
                  value
                }
              }
            }
          }
          quantity
          subtotal
          total
        }
      }
      availableShippingMethods {
        packageDetails
        rates {
          id
          cost
          label
        }
      }
      chosenShippingMethods
      appliedCoupons {
        code
        discountAmount
      }
      discountTotal
      shippingTotal
      subtotal
      total
    }
  }
`;

export default GET_CART;
