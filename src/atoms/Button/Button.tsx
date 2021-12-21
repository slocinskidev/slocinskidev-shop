import React, { forwardRef } from 'react';
import { Link } from 'gatsby';

import { BUTTON, ButtonProps } from './model.d';

import { Content, Wrapper } from './Button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = BUTTON.VARIANT.LINK,
      icon,
      iconRight = true,
      iconLeft,
      link,
      children = '',
      className,
      ...props
    },
    ref
  ) => {
    const showIcon = icon ? icon : null;

    const buttonContent = (
      <Content>
        {iconLeft && showIcon}
        <span>{children}</span>
        {iconRight && showIcon}
      </Content>
    );

    const renderButton = link ? (
      <Wrapper as={Link} className={className} to={link} variant={variant}>
        {buttonContent}
      </Wrapper>
    ) : (
      <Wrapper className={className} {...props} ref={ref} variant={variant}>
        {buttonContent}
      </Wrapper>
    );

    return renderButton;
  }
);

export default Button;
