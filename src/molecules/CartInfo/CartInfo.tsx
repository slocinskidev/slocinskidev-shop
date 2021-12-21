import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Button, { BUTTON } from 'atoms/Button';
import { STRING } from 'utils/constants';

import {
  Wrapper,
  StyledImage,
  Heading,
  MoreText,
  StyledRightArrow,
} from './CartInfo.styles';

const CartInfo = ({ cartInfo }: { cartInfo: CommonTypes.CartInfoType }) => {
  if (!cartInfo) return null;

  const { image, noProductText, noProductDescription, button } = cartInfo;

  const renderImage = () => {
    if (!image) return null;

    const {
      extension: imageExtension,
      publicURL,
      childImageSharp,
    } = image.localFile;

    const isGatsbyImage =
      imageExtension !== STRING.SVG_EXTENSION && childImageSharp;

    const gatsbyImage = isGatsbyImage ? getImage(image.localFile) : null;

    return isGatsbyImage ? (
      <StyledImage as={GatsbyImage} image={gatsbyImage!} alt={image?.altText} />
    ) : (
      <StyledImage as="img" src={publicURL} alt={image?.altText} />
    );
  };

  return (
    <Wrapper>
      {renderImage()}
      <Heading>{noProductText}</Heading>
      <MoreText dangerouslySetInnerHTML={{ __html: noProductDescription }} />
      <Button
        variant={BUTTON.VARIANT.CONTAINED}
        link={button.uri}
        icon={<StyledRightArrow />}
      >
        {button.title}
      </Button>
    </Wrapper>
  );
};

export default CartInfo;
