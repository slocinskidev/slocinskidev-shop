import React from 'react';
import { Link } from 'gatsby';

import { LOGO } from 'atoms/Logo';
import { ROOT_PATH } from 'utils/constants';

import { NavigationProps } from './model';

import { Wrapper, StyledLogo, NavList, NavItem } from './Navigation.styles';

const Navigation = ({ isActive, navigation }: NavigationProps) => {
  const renderNavigationItems = navigation?.map(({ label, path }) => (
    <NavItem key={label}>
      <Link to={path} activeClassName="active">
        {label}
      </Link>
    </NavItem>
  ));

  return (
    <Wrapper isActive={isActive}>
      <NavList>{renderNavigationItems}</NavList>
    </Wrapper>
  );
};

export default Navigation;
