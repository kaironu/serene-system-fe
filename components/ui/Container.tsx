'use client';

import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizes = {
  sm: 'max-w-5xl',
  md: 'max-w-7xl',
  lg: 'max-w-[1440px]',
  full: 'max-w-full',
};

export function Container({
  children,
  size = 'md',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4',
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
