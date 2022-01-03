export type ContextType = {
  cart: CartProductType;
  setCart: React.Dispatch<React.SetStateAction<{} | CommonTypes.CartType>>;
};
