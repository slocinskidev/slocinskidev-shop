import { gql } from '@apollo/client';

const ADD_TO_CART = gql`
  mutation AddToCart($input: AddToCartInput!) {
    addToCart(input: $input) {
      cart {
        subtotal
        total
        shippingTotal
        contents {
          itemCount
          nodes {
            quantity
            total
            key
            product {
              node {
                name
                shortDescription
                sku
                databaseId
                ... on SimpleProduct {
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ADD_TO_CART;
