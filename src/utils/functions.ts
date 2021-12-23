export const getFloatVal = (string: string) => {
  const floatValue = string.match(/[+-]?\d+(\.\d+)?/g)?.join('.');

  if (!floatValue) return 0;

  return parseFloat(floatValue);
};

export const addFirstProduct = (product: CommonTypes.ProductType) => {
  let productPrice = getFloatVal(product.price);

  let newCart: CommonTypes.CartType = {
    products: [],
    totalProductsCount: 1,
    totalProductsPrice: productPrice,
  };

  const newProduct: CommonTypes.CartProductType = createNewProduct(
    product,
    productPrice,
    1
  );

  newCart.products.push(newProduct);
  localStorage.setItem('woo-shop-cart', JSON.stringify(newCart));

  return newCart;
};

export const createNewProduct = (
  product: CommonTypes.ProductType,
  productPrice: number,
  qty: number
) => {
  return {
    id: product.id,
    image: product.image,
    name: product.name,
    price: productPrice,
    qty: qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2)),
  };
};
