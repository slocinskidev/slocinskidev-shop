import React from 'react';

import { BUTTON } from 'atoms/Button';
import ProductList from 'organisms/ProductList';

import { RecentProductsProps } from './model';

import {
  Wrapper,
  StyledPageTitle,
  StyledButton,
  StyledRightArrow,
} from './RecentProducts.styles';

const RecentProducts = ({
  recentProductsHeading,
  recentProductsButton,
  products,
}: RecentProductsProps) => {
  const renderButton = () => {
    if (!recentProductsButton) return null;

    const { title, url } = recentProductsButton;

    return (
      <StyledButton
        variant={BUTTON.VARIANT.LINK}
        icon={<StyledRightArrow />}
        link={url}
      >
        {title}
      </StyledButton>
    );
  };

  return (
    <Wrapper>
      <StyledPageTitle>{recentProductsHeading}</StyledPageTitle>
      <ProductList products={products} />
      {renderButton()}
    </Wrapper>
  );
};

export default RecentProducts;
