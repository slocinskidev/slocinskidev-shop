import React, { FC } from 'react';
import { Link } from 'gatsby';

import Logo, { LOGO } from 'atoms/Logo';
import { NAVIGATION, ROOT_PATH } from 'utils/constants';

import { NavigationProps } from './model';

import { Wrapper, StyledLogo, NavList, NavItem } from './styles';

const Navigation: FC<NavigationProps> = ({ isActive }) => {
  const renderNavigationItems = NAVIGATION?.map(({ name, path, alt }) => (
    <NavItem key={name}>
      <Link to={path} aria-label={alt}>
        {name}
      </Link>
    </NavItem>
  ));

  return (
    <Wrapper isActive={isActive}>
      <StyledLogo
        variant={LOGO.VARIANT.SECONDARY}
        logoAlt="logo"
        link={ROOT_PATH}
      />
      <NavList>{renderNavigationItems}</NavList>
    </Wrapper>
  );
};

export default Navigation;
