import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

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

  const renderGallery = isGallery ? (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {gallery?.map(({ localFile, altText, id }) => {
        const gatsbyImage = getImage(localFile);

        if (!gatsbyImage) return null;

        return (
          <SwiperSlide key={id}>
            <StyledGatsbyImage image={gatsbyImage} alt={altText} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;

  const renderProductGallery = isGallery ? renderGallery : renderImage;

  return <Wrapper>{renderProductGallery}</Wrapper>;
};

export default ProductGallery;
