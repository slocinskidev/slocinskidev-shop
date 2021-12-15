export namespace LOGO {
  export enum VARIANT {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
  }
}

export interface LogoProps {
  logoAlt: string;
  linkAlt?: string;
  variant?: LOGO.VARIANT;
  link?: string;
  className?: string;
}
