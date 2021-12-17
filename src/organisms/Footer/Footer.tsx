import React from 'react';

import Logo, { LOGO } from 'atoms/Logo';

import { FooterProps } from './model';

import { Wrapper, StyledLink, StyledLogo } from './styles';

const Footer = ({
  footer: {
    description,
    url: { uri: link },
  },
}: FooterProps) => {
  return (
    <Wrapper>
      <StyledLogo link={link} variant={LOGO.VARIANT.SECONDARY} />
      <StyledLink to={link}>{description}</StyledLink>
    </Wrapper>
  );
};

export default Footer;
