'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-black text-white hover:bg-opacity-90 hover-lift',
        secondary:
          'bg-secondary text-text-primary hover:bg-tertiary border border-neutral-light',
        outline:
          'border-2 border-neutral-secondary text-text-primary hover:bg-secondary',
        ghost:
          'text-text-primary hover:bg-secondary',
        accent:
          'bg-accent-jade text-white hover:shadow-lg hover:scale-105',
        subtle:
          'text-text-secondary hover:text-text-primary',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
}
