import { DefaultTheme } from 'styled-components';
import { color } from './color';
import { font } from './font';
import { breakpoint } from './mixin';

export const theme: DefaultTheme = {
  color,
  font,
  breakpoint,
  maxWidth: '1400px',
};
