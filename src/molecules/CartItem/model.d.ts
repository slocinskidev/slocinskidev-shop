export interface CartItemProps {
  product: CommonTypes.CartProductType;
  setCart: React.Dispatch<React.SetStateAction<{} | CartProductType>>;
  removeProductFromCart: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
}
