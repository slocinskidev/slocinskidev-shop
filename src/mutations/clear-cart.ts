import { gql } from '@apollo/client';

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($input: RemoveItemsFromCartInput!) {
    removeItemsFromCart(input: $input) {
      cart {
        subtotal
        total
        shippingTotal
        contents {
          itemCount
          nodes {
            quantity
            key
            product {
              node {
                name
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

export default REMOVE_ITEM_FROM_CART;
