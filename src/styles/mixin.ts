import { css } from 'styled-components';

export const transition = (
  property: string,
  duration = '0.3s',
  easing = 'ease-in-out'
) => {
  return css`
    ${property}
    ${duration}
    ${easing};
  `;
};
