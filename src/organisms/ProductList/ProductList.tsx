import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { List, ProductName, ShortDescription } from './styles';

const ProductList = ({ products }: { products: CommonTypes.ProductType[] }) => {
  const renderProducts = products?.map(
    ({ id, image, name, shortDescription, link }) => {
      const gatsbyImage = getImage(image.localFile);

      const renderImage = gatsbyImage ? (
        <GatsbyImage image={gatsbyImage} alt={image.altText} />
      ) : null;

      return (
        <li key={id}>
          <Link to={link}>
            {renderImage}
            <ProductName>{name}</ProductName>
          </Link>
          <ShortDescription
            dangerouslySetInnerHTML={{ __html: shortDescription }}
          />
        </li>
      );
    }
  );

  return <List>{renderProducts}</List>;
};

export default ProductList;
