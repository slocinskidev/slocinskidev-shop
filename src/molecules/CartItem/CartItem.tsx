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

  const [productCount, setProductCount] = useState<number | null | undefined>(product?.quantity);

  const changeProductQuantity = (option: CommonTypes.SelectQuantityType | null, key: string) => {
    if (!option) return;

    const newQty = option.value;
    setProductCount(newQty);

    if (onUpdate != null) onUpdate({ key, quantity: newQty });
  };

  const removeProduct = (key: string) => {
    if (onUpdate != null) onUpdate({ key, quantity: 0 });
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

  const options = createStockOptions(
    (product?.product?.node?.__typename === 'SimpleProduct' &&
      product.product.node.stockQuantity) ||
      undefined,
  );

  return (
    <Wrapper loading={!!loading}>
      <StyledImage
        srcSet={product?.product?.node?.image?.srcSet!}
        sizes={product?.product?.node?.image?.sizes!}
        src={product?.product?.node?.image?.sourceUrl!}
        alt={product?.product?.node?.image?.altText!}
      />
      <Content>
        <ProductName>{product?.product?.node?.name}</ProductName>
        <ShortDescription
          dangerouslySetInnerHTML={{ __html: product?.product?.node?.shortDescription ?? '' }}
        />
        <StyledSelect
          classNamePrefix="Select"
          options={options}
          value={productCount && options[productCount - 1]}
          onChange={(option) =>
            changeProductQuantity(option as CommonTypes.SelectQuantityType, product.key)
          }
        />
        <Price dangerouslySetInnerHTML={{ __html: product?.total ?? '' }} />
      </Content>
      <DeleteButton onClick={() => removeProduct(product.key)} />
    </Wrapper>
  );
};

export default CartItem;
