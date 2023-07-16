import { ReactNode } from 'react';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type BgColorButton = 'bg-indigo-400' | 'bg-transparent';
export type ButtonProps = {
  children?: ReactNode;
  fullWidth?: boolean;
  bgColor?: BgColorButton;
  hasBorder?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
