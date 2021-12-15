import React, { useState } from 'react';

import Logo, { LOGO } from 'atoms/Logo';
import Navigation from 'organisms/Navigation';
import Hamburger from 'atoms/Hamburger';

import { ROOT_PATH } from 'utils/constants';

import { Wrapper, StyledLogo } from './styles';

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <StyledLogo
        variant={LOGO.VARIANT.SECONDARY}
        logoAlt="logo"
        link={ROOT_PATH}
      />
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <Navigation isActive={isActive} />
    </Wrapper>
  );
};

export default Header;
