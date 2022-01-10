import React, { useState } from 'react';

import { CartItemProps } from './model';

import {
  Content,
  DeleteButton,
  ProductName,
  StyledSelect,
  ShortDescription,
  StyledGatsbyImage,
  Wrapper,
  Price,
} from './CartItem.styles';
import { useLazyQuery, useMutation } from '@apollo/client';
import UPDATE_CART from 'mutations/update-cart';

const CartItem = ({ product, removeProductFromCart, refetch }: CartItemProps) => {
  if (!product) return null;

  const {
    key,
    product: {
      node: { name, shortDescription },
    },
    quantity,
    total,
  } = product;

  const [updateCart, { loading: updateCartProcessing }] = useMutation(UPDATE_CART, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      if (error) {
        console.log(error);
      }
    },
  });

  const [productCount, setProductCount] = useState<number>(quantity);

  // const gatsbyImage = getImage(localFile);

  // const renderImage = gatsbyImage ? <StyledGatsbyImage image={gatsbyImage} alt={altText} /> : null;

  const changeProductQuantity = (option: CommonTypes.SelectQuantityType | null, key: string) => {
    if (!option) return;

    const newQty = option.value;
    setProductCount(newQty);

    updateCart({
      variables: {
        input: {
          items: [{ key, quantity: newQty }],
        },
      },
    });
  };

  const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  return (
    <Wrapper>
      {/* {renderImage} */}
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
      <DeleteButton onClick={(e) => removeProductFromCart(e, key)} />
    </Wrapper>
  );
};

export default CartItem;
