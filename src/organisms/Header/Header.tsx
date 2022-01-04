import React, { useEffect, useState } from 'react';

import { LOGO } from 'atoms/Logo';
import Navigation from 'organisms/Navigation';
import Hamburger from 'atoms/Hamburger';
import PromoInfo from 'molecules/PromoInfo';
import CartIcon from 'molecules/CartIcon';

import { ROOT_PATH } from 'utils/constants';

import { Wrapper, StyledLogo, StyledDesktopLogo, CartButton } from './Header.styles';

const Header = ({
  navigation,
  promoInfo,
}: {
  navigation: CommonTypes.NavigationType[];
  promoInfo?: string;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isActive]);

  const renderPromoInfo = promoInfo ? <PromoInfo text={promoInfo} /> : null;

  return (
    <>
      <Wrapper>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
        <StyledLogo variant={LOGO.VARIANT.SECONDARY} link={ROOT_PATH} />
        <StyledDesktopLogo variant={LOGO.VARIANT.PRIMARY} link={ROOT_PATH} />
        <Navigation isActive={isActive} setIsActive={setIsActive} navigation={navigation} />
        <CartButton icon={<CartIcon />} link="/cart/" />
      </Wrapper>
      {renderPromoInfo}
    </>
  );
};

export default Header;
