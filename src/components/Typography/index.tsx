import React, { ForwardedRef, ReactNode, forwardRef } from 'react';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type TypographyProps = {
  children: ReactNode;
  className?: string;
  variant: Variant;
};
const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      children, variant, className, ...rest
    }: TypographyProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const elementMap: Record<Variant, string> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      p: 'p',
    };

    const Element = elementMap[variant];

    const classes = className || '';
    return React.createElement(
      Element,
      {
        ...rest,
        ref,
        className: classes,
      },
      children,
    );
  },
);

Typography.displayName = 'Typography';

export default Typography;
