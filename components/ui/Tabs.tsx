'use client';

interface TabsProps {
  tabs: Array<{
    label: string;
    value: string;
  }>;
  activeTab: string;
  onChange: (tab: string) => void;
  children: React.ReactNode;
}

export function Tabs({ tabs, activeTab, onChange, children }: TabsProps) {
  return (
    <div>
      <div className="flex gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === tab.value
                ? 'border-black text-black'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
}
