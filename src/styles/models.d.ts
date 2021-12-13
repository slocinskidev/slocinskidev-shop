import { color } from './color';
import { font } from './font';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<keyof typeof color, string>;
    font: {
      roboto: string;
      weight: Record<keyof typeof font.weight, number>;
      size: Record<keyof typeof font.size, string>;
    };
    breakpoint: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', Function>;
    maxWidth: string;
  }
}
