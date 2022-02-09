import { CartQuery, UpdateCartMutationVariables } from 'apolloTypes';

export interface CartItemProps {
  product: NonNullable<
    NonNullable<NonNullable<NonNullable<CartQuery['cart']>['contents']>['nodes']>[0]
  >;
  loading?: boolean;
  onUpdate?: (variables: UpdateCartMutationVariables) => void;
}
