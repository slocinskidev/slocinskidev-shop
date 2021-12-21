import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { BUTTON } from 'atoms/Button';
import { STRING } from 'utils/constants';

import {
  Wrapper,
  Content,
  Heading,
  Description,
  StyledImage,
  StyledButton,
  StyledRightArrow,
} from './HeroBanner.styles';

const HeroBanner = () => {
  const {
    homepage: { heroBanner },
  } = useStaticQuery(graphql`
    {
      homepage: wpPage(slug: { eq: "homepage" }) {
        heroBanner {
          heading
          description
          image {
            ...ImageFragment
          }
          button {
            ... on WpPage {
              title
              uri
            }
          }
        }
      }
    }
  `);

  if (!heroBanner) return null;

  const { heading, description, image, button } = heroBanner;

  const renderHeading = heading ? <Heading>{heading}</Heading> : null;

  const renderDescription = description ? (
    <Description>{description}</Description>
  ) : null;

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

  const renderButton = () => {
    if (!button) return null;

    const { title, uri: link } = button;

    return (
      <StyledButton
        icon={<StyledRightArrow />}
        variant={BUTTON.VARIANT.CONTAINED}
        link={link}
      >
        {title}
      </StyledButton>
    );
  };

  return (
    <Wrapper>
      <Content>
        {renderHeading}
        {renderDescription}
        {renderButton()}
      </Content>
      {renderImage()}
    </Wrapper>
  );
};

export default HeroBanner;
