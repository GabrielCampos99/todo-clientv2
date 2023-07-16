import { ReactNode } from 'react';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

export type TypographyProps = {
  children: ReactNode;
  className?: string;
  variant: Variant;
};
