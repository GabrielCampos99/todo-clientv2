import React, { ReactNode } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type BgColorButton = 'bg-indigo-400' | 'bg-transparent';
type ButtonProps = {
  children?: ReactNode;
  fullWidth?: boolean;
  bgColor?: BgColorButton;
  hasBorder?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    children = 'Botão',
    type = 'button',
    bgColor = 'bg-indigo-400',
    hasBorder = true,
    fullWidth = false,
    disabled = false,
    size = 'md',
    ...rest
  } = props;

  const buttonSizeMap: Record<ButtonSize, string> = {
    sm: 'px-2 py-1',
    md: 'px-3 py-2',
    lg: 'px-6 py-4',
    xl: 'px-8 py-6',
  };

  const buttonSize = buttonSizeMap[size];
  const fullWidthStyles = fullWidth ? 'w-full' : '';
  const hasBorderButton = hasBorder ? 'border rounded' : '';
  const isDisableStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'transition-transform';

  return (
    <button
      type={type}
      className={`text-white uppercase ${isDisableStyles} ${fullWidthStyles} ${bgColor} ${hasBorderButton} ${buttonSize}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
