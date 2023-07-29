import { ReactNode } from 'react';

export type CarrouselProps<T> = {
  data: T[];
  render: (item: T) => ReactNode;
  className?: string;
};
