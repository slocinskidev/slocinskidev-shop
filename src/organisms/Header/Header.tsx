import React, { useState } from 'react';

import { LOGO } from 'atoms/Logo';
import Navigation from 'organisms/Navigation';
import Hamburger from 'atoms/Hamburger';

import { ROOT_PATH } from 'utils/constants';

import { Wrapper, StyledLogo } from './Header.styles';
import PromoInfo from 'molecules/PromoInfo';

const Header = ({
  navigation,
}: {
  navigation: CommonTypes.NavigationType[];
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const promoInfo = 'Super deal! Free Shipping on orders over 500 zł';

  const renderPromoInfo = promoInfo ? <PromoInfo text={promoInfo} /> : null;

  return (
    <>
      <Wrapper>
        <StyledLogo variant={LOGO.VARIANT.PRIMARY} link={ROOT_PATH} />
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
        <Navigation isActive={isActive} navigation={navigation} />
      </Wrapper>
      {renderPromoInfo}
    </>
  );
};

export default Header;
