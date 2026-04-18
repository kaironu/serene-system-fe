'use client';

import { cn } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';
import { forwardRef } from 'react';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onSearch, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-text-tertiary" />
        </div>
        <input
          type="search"
          className={cn(
            'w-full pl-11 pr-4 py-3 font-sans text-base',
            'border border-neutral-light bg-white text-text-primary placeholder-text-tertiary',
            'rounded-lg transition-all duration-300',
            'focus:outline-none focus:border-accent-jade focus:ring-1 focus:ring-accent-jade',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hover:border-neutral-secondary',
            className
          )}
          ref={ref}
          onChange={(e) => {
            onSearch?.(e.target.value);
          }}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
