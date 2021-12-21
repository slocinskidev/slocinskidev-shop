import React from 'react';

import { HamburgerProps } from './model';

import { Wrapper, Bar } from './Hamburger.styles';

const Hamburger = ({ isActive, setIsActive }: HamburgerProps) => {
  return (
    <Wrapper
      isActive={isActive}
      onClick={() => setIsActive((prevState) => !prevState)}
    >
      <Bar />
    </Wrapper>
  );
};

export default Hamburger;
