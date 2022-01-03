export const getFloatVal = (string: string) => {
  const floatValue = string.match(/[+-]?\d+(\.\d+)?/g)?.join('.');

  if (!floatValue) return 0;

  return parseFloat(floatValue);
};

export const createNewProduct = (
  product: CommonTypes.ProductType | CommonTypes.CartProductType,
  productPrice: number,
  qty: number
): CommonTypes.CartProductType => {
  return {
    id: product.id,
    image: product.image,
    name: product.name,
    shortDescription: product.shortDescription,
    price: productPrice,
    qty: qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2)),
  };
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

export const isProductInCart = (
  existingProductInCart: CommonTypes.CartProductType[],
  productId: string
) => {
  const returnItemThatExists = (item: CommonTypes.CartProductType) => {
    if (item.id === productId) return item;
  };

  const newArray = existingProductInCart.filter(returnItemThatExists);

  return existingProductInCart.indexOf(newArray[0]);
};

export const getUpdatedProducts = (
  existingProductInCart: CommonTypes.CartProductType[],
  product: CommonTypes.ProductType | CommonTypes.CartProductType,
  qtyToBeAdded: number | boolean,
  newQty: number | boolean = false
): CommonTypes.CartProductType[] => {
  const productExistsIndex = isProductInCart(existingProductInCart, product.id);

  if (productExistsIndex > -1) {
    const updatedProducts = existingProductInCart;
    const updatedProduct = updatedProducts[productExistsIndex];

    updatedProduct.qty = newQty
      ? Number(newQty)
      : updatedProduct.qty + Number(qtyToBeAdded);
    updatedProduct.totalPrice = parseFloat(
      (updatedProduct.price * updatedProduct.qty).toFixed(2)
    );

    return updatedProducts;
  } else {
    const productPrice = getFloatVal(String(product.price));

    const newProduct = createNewProduct(
      product,
      productPrice,
      Number(qtyToBeAdded)
    );
    existingProductInCart.push(newProduct);

    return existingProductInCart;
  }
};

export const updateCart = (
  existingCart: CommonTypes.CartType,
  product: CommonTypes.ProductType | CommonTypes.CartProductType,
  qtyToBeAdded: number | boolean,
  newQty: number | boolean = false
) => {
  const updatedProducts = getUpdatedProducts(
    existingCart.products,
    product,
    qtyToBeAdded,
    newQty
  );
  const addPrice = (
    total: CommonTypes.CartProductType,
    item: CommonTypes.CartProductType
  ) => {
    total.totalPrice += item.totalPrice;
    total.qty += item.qty;

    return total;
  };

  const total = updatedProducts.reduce(addPrice, {
    id: product.id,
    image: product.image,
    name: product.name,
    shortDescription: product.shortDescription,
    price: 0,
    qty: 0,
    totalPrice: 0,
  });

  const updatedCart = {
    products: updatedProducts,
    totalProductsCount: total.qty,
    totalProductsPrice: total.totalPrice,
  };

  localStorage.setItem('woo-shop-cart', JSON.stringify(updatedCart));

  return updatedCart;
};
