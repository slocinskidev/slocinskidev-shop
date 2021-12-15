import React, { FC } from 'react';

import { HamburgerProps } from './model';

import { Wrapper, Bar } from './styles';

const Hamburger: FC<HamburgerProps> = ({ isActive, setIsActive }) => {
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
