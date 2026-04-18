'use client';

interface SortOption {
  label: string;
  value: string;
}

interface SortProps {
  options: SortOption[];
  currentSort: string;
  onSort: (sort: string) => void;
}

export function Sort({ options, currentSort, onSort }: SortProps) {
  return (
    <div className="mb-6">
      <select
        value={currentSort}
        onChange={(e) => onSort(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
