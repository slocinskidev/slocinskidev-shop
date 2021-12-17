import React from 'react';

import Logo, { LOGO } from 'atoms/Logo';

import { FooterProps } from './model';

import { Wrapper, StyledLink, StyledLogo } from './styles';

const Footer = ({
  footer: {
    description,
    url: { url },
  },
}: FooterProps) => {
  return (
    <Wrapper>
      <StyledLogo link={url} variant={LOGO.VARIANT.SECONDARY} />
      <StyledLink to={url}>{description}</StyledLink>
    </Wrapper>
  );
};

export default Footer;
