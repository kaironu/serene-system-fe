'use client';

interface FilterGroupProps {
  title: string;
  options: Array<{
    id: string;
    label: string;
  }>;
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function FilterGroup({
  title,
  options,
  selected,
  onChange,
}: FilterGroupProps) {
  const handleChange = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div>
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={() => handleChange(option.id)}
              className="mr-2"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
