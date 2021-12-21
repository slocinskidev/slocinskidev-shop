import React from 'react';

import ProductCard from 'molecules/ProductCard';

import { List } from './ProductList.styles';

const ProductList = ({ products }: { products: CommonTypes.ProductType[] }) => {
  if (!products) return null;

  const renderProducts = products?.map((product: CommonTypes.ProductType) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <List>{renderProducts}</List>;
};

export default ProductList;
