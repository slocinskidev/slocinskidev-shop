import React, { forwardRef } from 'react';
import { Link } from 'gatsby';

import RightArrow from 'atoms/SVG/RightArrow';

import { BUTTON, ButtonProps } from './model.d';

import { Content, Label, Wrapper } from './styles';

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
    const showIcon = isIcon ? <RightArrow /> : null;

    const buttonContent = (
      <Content>
        <Label>{children}</Label>
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
