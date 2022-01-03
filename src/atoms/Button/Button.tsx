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
      activeClassName = 'active',
      className,
      ...props
    },
    ref
  ) => {
    const renderIcon = icon ? icon : null;

    const buttonContent = (
      <Content>
        {iconLeft && renderIcon}
        {children && <span>{children}</span>}
        {iconRight && renderIcon}
      </Content>
    );

    const renderButton = link ? (
      <Wrapper
        as={Link}
        className={className}
        to={link}
        variant={variant}
        activeClassName={activeClassName}
      >
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
