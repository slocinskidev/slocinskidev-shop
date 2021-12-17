import React, { FC } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { LogoProps, LOGO } from './model.d';
import { STRING } from 'utils/constants';

const Logo: FC<LogoProps> = ({ variant, link, linkAlt, className }) => {
  const getLogo = (logoVariant?: LOGO.VARIANT) => {
    const {
      wpLayout: {
        logo: { primaryLogo, secondaryLogo },
      },
    } = useStaticQuery(graphql`
      {
        wpLayout(slug: { eq: "logos" }) {
          logo {
            primaryLogo {
              ...ImageFragment
            }
            secondaryLogo {
              ...ImageFragment
            }
          }
        }
      }
    `);

    if (!primaryLogo || !secondaryLogo) return null;

    const {
      extension: primaryImageExtension,
      publicURL: primaryPublicURL,
      childImageSharp: primaryChildImageSharp,
    } = primaryLogo.localFile;
    const {
      extension: secondaryImageExtension,
      publicURL: secondaryPublicURL,
      childImageSharp: secondaryChildImageSharp,
    } = secondaryLogo.localFile;

    const isPrimaryGatsbyImage =
      primaryImageExtension !== STRING.SVG_EXTENSION && primaryChildImageSharp;
    const isSecondaryGatsbyImage =
      secondaryImageExtension !== STRING.SVG_EXTENSION &&
      secondaryChildImageSharp;

    const primaryImage = getImage(primaryLogo.localFile);
    const secondaryImage = getImage(secondaryLogo.localFile);

    const variantsMap = {
      [LOGO.VARIANT.PRIMARY]: isPrimaryGatsbyImage ? (
        <GatsbyImage
          image={primaryImage!}
          alt={primaryLogo?.altText}
          className={className}
        />
      ) : (
        <img
          src={primaryPublicURL}
          alt={primaryLogo?.altText}
          className={className}
        />
      ),
      [LOGO.VARIANT.SECONDARY]: isSecondaryGatsbyImage ? (
        <GatsbyImage
          image={secondaryImage!}
          alt={secondaryLogo?.altText}
          className={className}
        />
      ) : (
        <img
          src={secondaryPublicURL}
          alt={secondaryLogo?.altText}
          className={className}
        />
      ),
    };

    return logoVariant
      ? variantsMap[logoVariant]
      : variantsMap[LOGO.VARIANT.PRIMARY];
  };

  const renderComponent = link ? (
    <Link to={link} aria-label={linkAlt}>
      {getLogo(variant)}
    </Link>
  ) : (
    getLogo(variant)
  );

  return renderComponent;
};

export default Logo;
