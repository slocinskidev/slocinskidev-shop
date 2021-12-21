import React from 'react';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import {
  List,
  ProductName,
  Price,
  StyledGatsbyImage,
  PriceSection,
  RegularPrice,
} from './ProductList.styles';

const ProductList = ({ products }: { products: CommonTypes.ProductType[] }) => {
  if (!products) return null;

  const renderProducts = products?.map(
    ({ id, image, name, price, regularPrice, link }) => {
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
        <li key={id}>
          <Link to={link}>
            {renderImage}
            <ProductName>{name}</ProductName>
          </Link>
          {renderPrice}
        </li>
      );
    }
  );

  return <List>{renderProducts}</List>;
};

export default ProductList;
