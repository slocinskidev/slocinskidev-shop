import { DefaultTheme } from 'styled-components';
import { color } from './color';
import { font } from './font';
import { breakpoint, transition } from './mixin';
import { variable } from './variable';

export const theme: DefaultTheme = {
  color,
  font,
  breakpoint,
  variable,
  transition,
};
