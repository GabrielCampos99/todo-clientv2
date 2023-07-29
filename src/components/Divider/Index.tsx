import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Divider = (props: Props) => {
  const { children, className, ...rest } = props;
  const dividerCls = className || '';

  if (children) {
    return (
      <div className={`flex items-center ${dividerCls}`} {...rest}>
        <div className="border-t-2 h-1 w-full" />
        {children}
        <div className="border-t-2  h-1 w-full" />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${dividerCls}`} {...rest}>
      <div className="border-t-2 h-1 w-full" />
    </div>
  );
};
export default Divider;
