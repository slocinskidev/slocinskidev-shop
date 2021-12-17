import React, { FC } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { LogoProps, LOGO } from './model.d';

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
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              altText
            }
            secondaryLogo {
              ...ImageFragment
            }
          }
        }
      }
    `);

    if (!primaryLogo || !secondaryLogo) return null;

    const primaryImage = getImage(primaryLogo.localFile);
    const secondaryImage = getImage(secondaryLogo.localFile);

    const variantsMap = {
      [LOGO.VARIANT.PRIMARY]: (
        <GatsbyImage
          image={primaryImage!}
          alt={primaryLogo.altText}
          className={className}
        />
      ),
      [LOGO.VARIANT.SECONDARY]: (
        <GatsbyImage
          image={secondaryImage!}
          alt={secondaryLogo.altText}
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
