import React, { useState } from 'react';

import { CartItemProps } from './model';

import {
  Content,
  DeleteButton,
  ProductName,
  StyledSelect,
  ShortDescription,
  StyledImage,
  Wrapper,
  Price,
} from './CartItem.styles';

const CartItem = ({ product, loading, onUpdate }: CartItemProps) => {
  if (!product) return null;

  const DEFAULT_MAX_PRODUCT_QUANTITY = 10;

  const {
    key,
    product: {
      node: {
        image: { srcSet, sizes, sourceUrl, altText },
        name,
        shortDescription,
        stockQuantity,
      },
    },
    quantity,
    total,
  } = product;

  const [productCount, setProductCount] = useState<number>(quantity);

  const changeProductQuantity = (option: CommonTypes.SelectQuantityType | null, key: string) => {
    if (!option) return;

    const newQty = option.value;
    setProductCount(newQty);

    onUpdate({ key, quantity: newQty });
  };

  const removeProduct = () => {
    onUpdate({ key, quantity: 0 });
  };

  const createStockOptions = (stockQuantity: number | null = 5) => {
    const checkStockQuantity = (qty: number | null): number => {
      if (!qty) return DEFAULT_MAX_PRODUCT_QUANTITY;

      if (qty > DEFAULT_MAX_PRODUCT_QUANTITY) return DEFAULT_MAX_PRODUCT_QUANTITY;

      return qty;
    };

    const val = Array.from({ length: checkStockQuantity(stockQuantity) }, (_, k) => ({
      value: k + 1,
      label: `${k + 1}`,
    }));

    return val;
  };

  const options = createStockOptions(stockQuantity);

  return (
    <Wrapper loading={loading}>
      <StyledImage srcSet={srcSet} sizes={sizes} src={sourceUrl} alt={altText} />
      <Content>
        <ProductName>{name}</ProductName>
        <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
        <StyledSelect
          classNamePrefix="Select"
          options={options}
          value={options[productCount - 1]}
          onChange={(option) =>
            changeProductQuantity(option as CommonTypes.SelectQuantityType, key)
          }
        />
        <Price dangerouslySetInnerHTML={{ __html: total }} />
      </Content>
      <DeleteButton onClick={removeProduct} />
    </Wrapper>
  );
};

export default CartItem;
