import { forwardRef } from 'react';
import { InputProps } from '../../types/components/input';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    label,
    htmlFor,
    error,
    labelClassName,
    containerClassName,
    ...rest
  } = props;
  const labelClx = labelClassName || '';
  const containerClx = containerClassName || '';

  const hasError = () => error && 'border-red-500';
  return (
    <div className={`flex flex-col ${containerClx}`}>
      {!!label && (
        <label
          className={`mb-2 text-base font-medium text-gray-300 ${labelClx}`}
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`p-3 rounded bg-zinc-800 text-white text-base font-semibold ${
          hasError() || ''
        }`}
        {...rest}
      />
      {!!error && <span className="text-red-500">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
