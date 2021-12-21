import React from 'react';

import { Title } from './PageTitle.styles';

const PageTitle = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return <Title className={className}>{children}</Title>;
};

export default PageTitle;
