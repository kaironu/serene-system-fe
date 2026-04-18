'use client';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={`border-t border-neutral-light ${className || ''}`} />
  );
}
