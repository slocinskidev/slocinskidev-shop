export namespace BUTTON {
  export enum VARIANT {
    LINK = 'link',
    CONTAINED = 'contained',
    OUTLINE = 'outline',
    ACCORDION = 'accordion',
  }
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: BUTTON.VARIANT;
  icon?: JSX.Element;
  iconRight?: boolean;
  iconLeft?: boolean;
  link?: string;
  className?: string;
}
