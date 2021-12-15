import Logo, { LOGO } from 'atoms/Logo';
import React, { FC } from 'react';

import { FOOTER_URL, FOOTER_TEXT } from 'utils/constants';

import { Wrapper, StyledLink, StyledLogo } from './styles';

const Footer: FC = () => {
  return (
    <Wrapper>
      <StyledLogo
        link={FOOTER_URL}
        logoAlt="brand logo"
        variant={LOGO.VARIANT.TERTIARY}
      />
      <StyledLink to={FOOTER_URL}>{FOOTER_TEXT}</StyledLink>
    </Wrapper>
  );
};

export default Footer;
