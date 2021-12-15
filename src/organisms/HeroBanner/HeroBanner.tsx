import React from 'react';

import ShoppingHero from 'atoms/SVG/ShoppingHero';

import {
  Wrapper,
  Content,
  Heading,
  Description,
  StyledShoppingHero,
} from './styles';

const HeroBanner = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>Hipster ipsum</Heading>
        <Description>
          I`m baby actually pork belly sartorial, organic hell of migas ethical
          palo santo. Paleo tumeric 3 wolf moon tattooed heirloom. Etsy health
          goth occupy put a bird on it activated charcoal portland taiyaki tilde
          meditation deep v taxidermy pinterest. Schlitz forage farm-to-table
          polaroid.
        </Description>
      </Content>
      <StyledShoppingHero />
    </Wrapper>
  );
};

export default HeroBanner;
