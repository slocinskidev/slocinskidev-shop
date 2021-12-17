import React, { forwardRef } from 'react';
import { Link } from 'gatsby';

import { BUTTON, ButtonProps } from './model.d';

import { Content, Wrapper, StyledRightArrow } from './styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = BUTTON.VARIANT.LINK,
      isIcon,
      link,
      children = '',
      className,
      ...props
    },
    ref
  ) => {
    const showIcon = isIcon ? <StyledRightArrow /> : null;

    const buttonContent = (
      <Content>
        <span>{children}</span>
        {showIcon}
      </Content>
    );

    const renderButton = link ? (
      <Wrapper
        as={Link}
        className={className}
        to={link}
        variant={variant}
        isIcon={isIcon}
      >
        {buttonContent}
      </Wrapper>
    ) : (
      <Wrapper
        className={className}
        {...props}
        ref={ref}
        variant={variant}
        isIcon={isIcon}
      >
        {buttonContent}
      </Wrapper>
    );

    return renderButton;
  }
);

export default Button;
