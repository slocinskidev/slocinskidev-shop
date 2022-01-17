export interface CartItemProps {
  product: CommonTypes.CartProductType;
  loading: boolean;
  onUpdate: (values: any) => void;
}
