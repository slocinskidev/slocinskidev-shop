import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import {
  Wrapper,
  Price,
  PriceSection,
  ProductName,
  RegularPrice,
  StyledGatsbyImage,
} from './ProductCard.styles';

const ProductCard = ({ product }: { product: CommonTypes.ProductType }) => {
  if (!product) return null;

  const { id, image, name, price, regularPrice, link } = product;

  const gatsbyImage = getImage(image.localFile);

  const renderImage = gatsbyImage ? (
    <StyledGatsbyImage image={gatsbyImage} alt={image?.altText} />
  ) : null;

  const renderPrice = price ? (
    <PriceSection>
      <Price dangerouslySetInnerHTML={{ __html: price }} />
      {regularPrice && (
        <RegularPrice dangerouslySetInnerHTML={{ __html: regularPrice }} />
      )}
    </PriceSection>
  ) : null;

  return (
    <Wrapper key={id}>
      <Link to={link}>
        {renderImage}
        <ProductName>{name}</ProductName>
      </Link>
      {renderPrice}
    </Wrapper>
  );
};

export default ProductCard;
