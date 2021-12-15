import { color } from './color';
import { font } from './font';
import { variable } from './variable';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<keyof typeof color, string>;
    font: {
      roboto: string;
      weight: Record<keyof typeof font.weight, number>;
      size: Record<keyof typeof font.size, string>;
    };
    variable: Record<keyof typeof variable, string | number>;
    transition: (
      property: string,
      duration?: string,
      easing?: string
    ) => FlattenSimpleInterpolation;
  }
}
