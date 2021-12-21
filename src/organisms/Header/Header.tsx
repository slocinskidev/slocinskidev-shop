import React, { useState } from 'react';

import { LOGO } from 'atoms/Logo';
import Navigation from 'organisms/Navigation';
import Hamburger from 'atoms/Hamburger';
import PromoInfo from 'molecules/PromoInfo';
import Button from 'atoms/Button';

import useMobileScreenSize from 'utils/useMobileScreenSize';
import { ROOT_PATH } from 'utils/constants';

import { Wrapper, StyledLogo, StyledBasket } from './Header.styles';

const Header = ({
  navigation,
}: {
  navigation: CommonTypes.NavigationType[];
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const isMobile = useMobileScreenSize();

  const promoInfo = 'Super deal! Free Shipping on orders over 500 zł';

  const renderPromoInfo = promoInfo ? <PromoInfo text={promoInfo} /> : null;

  const renderHamburger = isMobile ? (
    <Hamburger isActive={isActive} setIsActive={setIsActive} />
  ) : null;

  return (
    <>
      <Wrapper>
        {renderHamburger}
        <StyledLogo
          variant={isMobile ? LOGO.VARIANT.SECONDARY : LOGO.VARIANT.PRIMARY}
          link={ROOT_PATH}
        />
        <Navigation isActive={isActive} navigation={navigation} />
        <Button icon={<StyledBasket />} link="/cart/" />
      </Wrapper>
      {renderPromoInfo}
    </>
  );
};

export default Header;
