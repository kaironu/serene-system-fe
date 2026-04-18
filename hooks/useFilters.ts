import { useCallback, useState } from 'react';

interface UseFiltersOptions {
  initialFilters?: Record<string, any>;
}

export function useFilters(options: UseFiltersOptions = {}) {
  const [filters, setFilters] = useState(options.initialFilters || {});

  const addFilter = useCallback((key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const removeFilter = useCallback((key: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  return {
    filters,
    addFilter,
    removeFilter,
    clearFilters,
  };
}
