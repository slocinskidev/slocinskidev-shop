import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';

import { swiperOptions } from './options';

import 'swiper/css';
import 'swiper/css/pagination';

import { Slider, StyledGatsbyImage, Wrapper } from './ProductGallery.styles';
import { WpSimpleProduct } from 'graphqlTypes';

const ProductGallery = ({
  image,
  gallery,
}: {
  image: NonNullable<WpSimpleProduct['image']>;
  gallery: Array<WpSimpleProduct['image']>;
}) => {
  const isGallery = gallery.length;

  const renderImage = (img: CommonTypes.ImageType) => {
    if (!img) return null;

    const { localFile, altText } = img;

    const gatsbyImage = getImage(localFile);

    const renderComponent = gatsbyImage ? (
      <StyledGatsbyImage image={gatsbyImage} alt={altText} />
    ) : null;

    return renderComponent;
  };

  const renderGallery = isGallery ? (
    <Slider {...swiperOptions}>
      {gallery?.map((image) => {
        return <SwiperSlide key={image.id}>{renderImage(image)}</SwiperSlide>;
      })}
    </Slider>
  ) : null;

  const renderProductGallery = isGallery ? renderGallery : renderImage(image);

  return <Wrapper>{renderProductGallery}</Wrapper>;
};

export default ProductGallery;
