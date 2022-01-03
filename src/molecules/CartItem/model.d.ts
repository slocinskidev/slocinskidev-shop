export interface CartItemProps {
  product: CommonTypes.CartProductType;
  setCart: React.Dispatch<React.SetStateAction<{} | CartProductType>>;
}
