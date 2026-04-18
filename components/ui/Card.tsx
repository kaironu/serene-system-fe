'use client';

import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
}

export function Card({
  children,
  className,
  variant = 'default',
  ...props
}: CardProps) {
  const variants = {
    default: 'border border-neutral-light bg-white',
    elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow duration-300',
    outlined: 'border-2 border-neutral-secondary',
  };

  return (
    <div
      className={cn(
        'rounded-lg p-6 transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
