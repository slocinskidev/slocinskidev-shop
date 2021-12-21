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

  const {
    image: { localFile, altText },
    name,
    price,
    regularPrice,
    link,
  } = product;

  const gatsbyImage = getImage(localFile);

  const renderImage = gatsbyImage ? (
    <StyledGatsbyImage image={gatsbyImage} alt={altText} />
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
    <Wrapper>
      <Link to={link}>
        {renderImage}
        <ProductName>{name}</ProductName>
      </Link>
      {renderPrice}
    </Wrapper>
  );
};

export default ProductCard;
