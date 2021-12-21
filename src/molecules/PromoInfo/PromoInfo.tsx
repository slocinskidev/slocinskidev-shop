import React from 'react';

import { Wrapper } from './PromoInfo.styles';

const PromoInfo = ({ text }: { text: string }) => {
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
};

export default PromoInfo;
