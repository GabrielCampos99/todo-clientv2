import React from 'react';

type BgColorButton = 'bg-indigo-400' | 'bg-transparent';
type ButtonProps = {
  text?: string;
  fullWidth?: boolean;
  bgColor?: BgColorButton;
  hasBorder?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const {
    text = 'Botão',
    type = 'button',
    bgColor = 'bg-indigo-400',
    hasBorder = true,
    fullWidth = false,
    ...rest
  } = props;

  const fullWidthStyles = fullWidth ? 'w-full' : '';
  const hasBorderButton = hasBorder ? 'border rounded' : '';
  return (
    <button
      type={type}
      className={`px-6 py-4 text-white uppercase transition-transform hover:scale-[102%] ${fullWidthStyles} ${bgColor} ${hasBorderButton}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
