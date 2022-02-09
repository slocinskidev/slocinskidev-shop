import ArrowDown from 'atoms/SVG/ArrowDown';
import styled, { css } from 'styled-components';
import { AccordionCollapsedType } from './model';

export const Content = styled.div`
  display: grid;
  max-height: 0;
  overflow: hidden;
`;

export const StyledArrowDown = styled(ArrowDown)`
  width: 30px;
  height: 30px;
  transition: ${({ theme }) => theme.transition('transform')};
`;

export const Wrapper = styled.section<{ isCollapsed: AccordionCollapsedType }>`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray6};

  &::before {
    position: absolute;
    bottom: -2px;
    width: 100%;
    content: '';
    opacity: 0;
    transition: ${({ theme }) => theme.transition('opacity')};
  }

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      &::before {
        border-bottom: 2px solid ${({ theme }) => theme.color.tertiary};
        opacity: 1;
      }

      ${Content} {
        height: auto;
        max-height: max-content;
        padding-bottom: 2rem;
        line-height: 1.5;
      }

      ${StyledArrowDown} {
        transform: rotate(-180deg);
      }
    `}
`;
