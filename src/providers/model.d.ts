export type ContextType = {
  cart: CommonTypes.CartType;
  setCart: React.Dispatch<React.SetStateAction<{} | CommonTypes.CartType>>;
};
