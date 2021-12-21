import React, { useState } from 'react';

import Button, { BUTTON } from 'atoms/Button';
import ArrowDown from 'atoms/SVG/ArrowDown';

import { AccordionProps } from './model';

import { Wrapper, Content, StyledArrowDown } from './Accordion.styles';

const Accordion = ({
  title,
  content,
  className,
  isAccordionOpen = false,
}: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isAccordionOpen);

  const renderContent = content ? (
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  ) : null;

  return (
    <Wrapper isCollapsed={isCollapsed} className={className}>
      <Button
        variant={BUTTON.VARIANT.ACCORDION}
        icon={<StyledArrowDown />}
        onClick={() => setIsCollapsed((prevState) => !prevState)}
      >
        {title}
      </Button>
      {renderContent}
    </Wrapper>
  );
};

export default Accordion;
