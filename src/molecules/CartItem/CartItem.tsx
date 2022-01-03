import React, { useState } from 'react';
import { getImage } from 'gatsby-plugin-image';

import { CartItemProps } from './model';

import {
  Content,
  DeleteButton,
  ProductName,
  Quantity,
  ShortDescription,
  StyledGatsbyImage,
  Wrapper,
} from './CartItem.styles';
import { isBrowser } from 'utils/isBrowser';
import { updateCart } from 'utils/functions';

const CartItem = ({
  product,
  setCart,
  removeProductFromCart,
}: CartItemProps) => {
  if (!product) return null;

  const {
    image: { localFile, altText },
    name,
    shortDescription,
    qty,
    totalPrice,
  } = product;

  const [productCount, setProductCount] = useState<number>(qty);

  const gatsbyImage = getImage(localFile);

  const renderImage = gatsbyImage ? (
    <StyledGatsbyImage image={gatsbyImage} alt={altText} />
  ) : null;

  const changeProductQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isBrowser) return null;

    const newQty = e.target.value;
    setProductCount(+newQty);

    const localCart = localStorage.getItem('woo-shop-cart');

    if (localCart) {
      const existingCart = JSON.parse(localCart);

      const updatedCart = updateCart(
        existingCart,
        product,
        false,
        Number(newQty)
      );
      setCart(updatedCart);
    }
  };

  return (
    <Wrapper>
      {renderImage}
      <Content>
        <ProductName>{name}</ProductName>
        <ShortDescription
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
        <Quantity
          type="number"
          min="1"
          value={productCount}
          onChange={(e) => changeProductQuantity(e)}
        />
        {totalPrice.toFixed(2)} zł
      </Content>
      <DeleteButton onClick={(e) => removeProductFromCart(e)} />
    </Wrapper>
  );
};

export default CartItem;
