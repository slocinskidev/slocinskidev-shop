import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { StyledGatsbyImage, Wrapper } from './ProductGallery.styles';

const ProductGallery = ({
  image,
  gallery,
}: {
  image: CommonTypes.ImageType;
  gallery: CommonTypes.ImageType[];
}) => {
  const isGallery = gallery.length;

  const gatsbyImage = getImage(image.localFile);

  const renderImage = gatsbyImage ? (
    <StyledGatsbyImage image={gatsbyImage} alt={image.altText} />
  ) : null;

  const renderGallery = isGallery ? <h2>Gallery</h2> : null;

  const renderProductGallery = isGallery ? renderGallery : renderImage;

  return <Wrapper>{renderProductGallery}</Wrapper>;
};

export default ProductGallery;
