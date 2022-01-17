import { gql } from '@apollo/client';

const ADD_TO_CART = gql`
  mutation AddToCart($productId: Int!, $variationId: Int, $quantity: Int) {
    addToCart(
      input: {
        clientMutationId: "AddToCart"
        productId: $productId
        variationId: $variationId
        quantity: $quantity
      }
    ) {
      cartItem {
        key
        quantity
      }
    }
  }
`;

export default ADD_TO_CART;
