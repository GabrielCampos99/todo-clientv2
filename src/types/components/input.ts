export type InputProps = {
  className?: string;
  label?: string;
  htmlFor?: string;
  error?: string;
  labelClassName?: string;
  containerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
