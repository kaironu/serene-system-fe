'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full px-4 py-3 font-sans text-base',
          'border border-neutral-light bg-white text-text-primary placeholder-text-tertiary',
          'rounded-lg transition-all duration-300',
          'focus:outline-none focus:border-accent-jade focus:ring-1 focus:ring-accent-jade',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'hover:border-neutral-secondary',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
