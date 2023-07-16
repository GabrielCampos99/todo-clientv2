import { forwardRef } from 'react';
import { InputProps } from '../../types/components/input';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className, label, htmlFor, error, ...rest
  } = props;
  const hasError = () => error && 'border-red-500';
  return (
    <div className="flex flex-col">
      {!!label && (
        <label
          className="mb-2 text-base text-stone-700 font-medium dark:text-gray-300"
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`p-3 rounded border-solid border text-stone-800 dark:bg-zinc-800 dark:text-white text-base font-semibold ${
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
