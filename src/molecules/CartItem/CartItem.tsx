import React from 'react';
import { getImage } from 'gatsby-plugin-image';

import { CartItemProps } from './model';

import {
  Content,
  ProductName,
  StyledGatsbyImage,
  Wrapper,
} from './CartItem.styles';

const CartItem = ({ product }: CartItemProps) => {
  if (!product) return null;

  const {
    image: { localFile, altText },
    name,
    price,
    qty,
    totalPrice,
  } = product;

  const gatsbyImage = getImage(localFile);

  const renderImage = gatsbyImage ? (
    <StyledGatsbyImage image={gatsbyImage} alt={altText} />
  ) : null;

  const removeProductFromCart = () => {};

  return (
    <Wrapper>
      {renderImage}
      <Content>
        <ProductName>{name}</ProductName>
        {/* <DeleteProductIcon /> */}
        {price}
      </Content>
    </Wrapper>
  );
};

export default CartItem;
