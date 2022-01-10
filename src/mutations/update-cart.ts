import { gql } from '@apollo/client';

const UPDATE_CART = gql`
  mutation UpdateCart($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input) {
      items {
        key
        quantity
      }
    }
  }
`;

export default UPDATE_CART;
