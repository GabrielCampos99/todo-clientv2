import React, { ReactNode } from 'react';

type BgColorButton = 'bg-indigo-400' | 'bg-transparent';
type ButtonProps = {
  children?: ReactNode;
  fullWidth?: boolean;
  bgColor?: BgColorButton;
  hasBorder?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    children = 'Botão',
    type = 'button',
    bgColor = 'bg-indigo-400',
    hasBorder = true,
    fullWidth = false,
    disabled = false,
    ...rest
  } = props;

  const fullWidthStyles = fullWidth ? 'w-full' : '';
  const hasBorderButton = hasBorder ? 'border rounded' : '';
  const isDisableStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'transition-transform hover:scale-[101%]';

  return (
    <button
      type={type}
      className={`px-6 py-4 text-white uppercase ${isDisableStyles} ${fullWidthStyles} ${bgColor} ${hasBorderButton}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
