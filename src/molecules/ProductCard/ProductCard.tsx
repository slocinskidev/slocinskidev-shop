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
  ShortDescription,
} from './ProductCard.styles';

const ProductCard = ({ product }: { product: CommonTypes.ProductType }) => {
  if (!product) return null;

  const {
    image: { localFile, altText },
    name,
    shortDescription,
    price,
    regularPrice,
    onSale,
    link,
  } = product;

  const gatsbyImage = getImage(localFile);

  const renderImage = gatsbyImage ? <StyledGatsbyImage image={gatsbyImage} alt={altText} /> : null;

  const renderPrice = price ? (
    <PriceSection>
      {onSale ? <RegularPrice dangerouslySetInnerHTML={{ __html: regularPrice }} /> : null}
      <Price dangerouslySetInnerHTML={{ __html: price }} />
    </PriceSection>
  ) : null;

  return (
    <Wrapper>
      <Link to={link}>
        {renderImage}
        <ProductName>{name}</ProductName>
        <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
      </Link>
      {renderPrice}
    </Wrapper>
  );
};

export default ProductCard;
