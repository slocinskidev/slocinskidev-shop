import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';

import { updateCart } from 'utils/functions';

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

const CartItem = ({ product, setCart, removeProductFromCart }: CartItemProps) => {
  if (!product) return null;

  const {
    id,
    image: { localFile, altText },
    name,
    shortDescription,
    qty,
    totalPrice,
  } = product;

  const [productCount, setProductCount] = useState<number>(qty);

  const gatsbyImage = getImage(localFile);

  const renderImage = gatsbyImage ? <StyledGatsbyImage image={gatsbyImage} alt={altText} /> : null;

  const changeProductQuantity = (option: CommonTypes.SelectQuantityType | null) => {
    if (!option) return;

    const newQty = option.value;
    setProductCount(+newQty);

    const localCart = localStorage.getItem('woo-shop-cart');

    if (localCart) {
      const existingCart = JSON.parse(localCart);
      const updatedCart = updateCart(existingCart, product, false, Number(newQty));

      setCart(updatedCart);
    }
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
      {renderImage}
      <Content>
        <ProductName>{name}</ProductName>
        <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
        <StyledSelect
          classNamePrefix="Select"
          options={options}
          value={options[productCount - 1]}
          onChange={(option) => changeProductQuantity(option as CommonTypes.SelectQuantityType)}
        />
        <Price>{totalPrice.toFixed(2)} zł</Price>
      </Content>
      <DeleteButton onClick={(e) => removeProductFromCart(e, id)} />
    </Wrapper>
  );
};

export default CartItem;
