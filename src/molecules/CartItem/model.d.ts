export interface CartItemProps {
  product: CommonTypes.CartProductType;
  removeProductFromCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: string) => void;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      cart: CommonTypes.CartType;
    }>
  >;
}
