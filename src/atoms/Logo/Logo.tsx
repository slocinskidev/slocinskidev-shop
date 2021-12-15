import React, { FC } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

import { LogoProps, LOGO } from './model.d';

const Logo: FC<LogoProps> = ({
  variant,
  link,
  logoAlt,
  linkAlt,
  className,
}) => {
  const getLogo = (logoVariant?: LOGO.VARIANT) => {
    const variantsMap = {
      [LOGO.VARIANT.PRIMARY]: (
        <StaticImage
          src="../../assets/images/logo/logo-svg.svg"
          alt={logoAlt}
          placeholder="blurred"
          className={className}
        />
      ),
      [LOGO.VARIANT.SECONDARY]: (
        <StaticImage
          src="../../assets/images/logo/logo-svg-light.svg"
          alt={logoAlt}
          placeholder="blurred"
          className={className}
        />
      ),
      [LOGO.VARIANT.TERTIARY]: (
        <StaticImage
          src="../../assets/images/logo/logo.png"
          alt={logoAlt}
          placeholder="blurred"
          width={40}
          height={40}
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
