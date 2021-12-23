import React from 'react';

import { Wrapper } from './Badge.styles';

const Badge = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Badge;
