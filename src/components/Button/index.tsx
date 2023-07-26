import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps, ButtonSize } from '../../types/components/button';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children = 'Botão',
    type = 'button',
    bgColor = 'bg-indigo-400',
    hasBorder = true,
    fullWidth = false,
    disabled = false,
    size = 'md',
    to,
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

  const isLink = !!to;
  const buttonProps = {
    ref,
    type: isLink ? undefined : type,
    className: `text-white uppercase ${isDisableStyles} ${fullWidthStyles} ${bgColor} ${hasBorderButton} ${buttonSize}`,
    ...rest,
  };

  return isLink && !disabled ? (
    <Link to={to}>
      <button {...buttonProps}>{children}</button>
    </Link>
  ) : (
    <button {...buttonProps}>{children}</button>
  );
});

Button.displayName = 'Button';

export default Button;
