export namespace BUTTON {
  export enum VARIANT {
    LINK = 'link',
    CONTAINED = 'contained',
    OUTLINE = 'outline',
  }
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: BUTTON.VARIANT;
  isIcon?: boolean;
  link?: string;
  className?: string;
}
