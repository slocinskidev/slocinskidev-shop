const NO_EXIST_INDEX = -1;

export const getFloatVal = (string: string) => {
  const floatValue = string.match(/[+-]?\d+(\.\d+)?/g)?.join('.');

  if (!floatValue) return 0;

  return parseFloat(floatValue);
};

export const createNewProduct = (
  product: CommonTypes.ProductType | CommonTypes.CartProductType,
  productPrice: number,
  qty: number,
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

  const newProduct: CommonTypes.CartProductType = createNewProduct(product, productPrice, 1);

  newCart.products.push(newProduct);
  localStorage.setItem('woo-shop-cart', JSON.stringify(newCart));

  return newCart;
};

export const isProductInCart = (
  existingProductInCart: CommonTypes.CartProductType[],
  productId: string,
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
  newQty: number | boolean = false,
): CommonTypes.CartProductType[] => {
  const productExistsIndex = isProductInCart(existingProductInCart, product.id);

  if (productExistsIndex !== NO_EXIST_INDEX) {
    const updatedProducts = existingProductInCart;
    const updatedProduct = updatedProducts[productExistsIndex];

    updatedProduct.qty = newQty ? Number(newQty) : updatedProduct.qty + Number(qtyToBeAdded);
    updatedProduct.totalPrice = parseFloat((updatedProduct.price * updatedProduct.qty).toFixed(2));

    return updatedProducts;
  } else {
    const productPrice = getFloatVal(String(product.price));

    const newProduct = createNewProduct(product, productPrice, Number(qtyToBeAdded));
    existingProductInCart.push(newProduct);

    return existingProductInCart;
  }
};

export const updateCart = (
  existingCart: CommonTypes.CartType,
  product: CommonTypes.ProductType | CommonTypes.CartProductType,
  qtyToBeAdded: number | boolean,
  newQty: number | boolean = false,
) => {
  const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);
  const addPrice = (total: CommonTypes.CartProductType, item: CommonTypes.CartProductType) => {
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

export const removeItemsFromCart = (productId: string) => {
  const localExistingCart = localStorage.getItem('woo-shop-cart');
  if (!localExistingCart) return;

  const existingCart: CommonTypes.CartType = JSON.parse(localExistingCart);

  const IS_ONE_PRODUCT_IN_CART = existingCart.products.length === 1;

  if (IS_ONE_PRODUCT_IN_CART) {
    localStorage.removeItem('woo-shop-cart');

    return {};
  }

  const productExistIndex = isProductInCart(existingCart.products, productId);

  if (productExistIndex !== NO_EXIST_INDEX) {
    const productToBeRemoved = existingCart.products[productExistIndex];
    const qtyToBeRemoved = productToBeRemoved.qty;
    const priceToBeDeductedFromTotal = productToBeRemoved.totalPrice;

    const updatedCart = existingCart;

    updatedCart.products.splice(productExistIndex, 1);
    updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemoved;
    updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;

    localStorage.setItem('woo-shop-cart', JSON.stringify(updatedCart));

    return updatedCart;
  } else {
    return existingCart;
  }
};
