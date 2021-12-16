import React, { FC } from 'react';
import { Link } from 'gatsby';

import { LOGO } from 'atoms/Logo';
import { ROOT_PATH } from 'utils/constants';

import { NavigationProps } from './model';

import { Wrapper, StyledLogo, NavList, NavItem } from './styles';

const Navigation: FC<NavigationProps> = ({ isActive, navigation }) => {
  const renderNavigationItems = navigation?.map(({ label, path }) => (
    <NavItem key={label}>
      <Link to={path}>{label}</Link>
    </NavItem>
  ));

  return (
    <Wrapper isActive={isActive}>
      <StyledLogo variant={LOGO.VARIANT.PRIMARY} link={ROOT_PATH} />
      <NavList>{renderNavigationItems}</NavList>
    </Wrapper>
  );
};

export default Navigation;
