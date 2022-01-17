import { gql } from '@apollo/client';

const UPDATE_CART = gql`
  mutation UpdateCart($key: ID!, $quantity: Int!) {
    updateItemQuantities(
      input: { clientMutationId: "UpdateCart", items: [{ key: $key, quantity: $quantity }] }
    ) {
      items {
        key
        quantity
      }
    }
  }
`;

export default UPDATE_CART;
