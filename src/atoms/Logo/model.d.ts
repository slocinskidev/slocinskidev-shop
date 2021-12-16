export namespace LOGO {
  export enum VARIANT {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
  }
}

export interface LogoProps {
  linkAlt?: string;
  variant?: LOGO.VARIANT;
  link?: string;
  className?: string;
}
