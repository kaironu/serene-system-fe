'use client';

import { cn } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'gold' | 'brick';
}

const tagVariants = {
  default: 'bg-secondary text-text-primary border border-neutral-light',
  accent: 'bg-accent-jade/10 text-accent-jade border border-accent-jade/30',
  gold: 'bg-accent-gold/10 text-accent-gold border border-accent-gold/30',
  brick: 'bg-accent-jade/10 text-accent-jade border border-accent-jade/30',
};

export function Tag({
  children,
  variant = 'default',
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-xs font-semibold',
        tagVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
