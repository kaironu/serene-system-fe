'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SearchInput } from '@/components/ui/SearchInput';
import { useRouter } from 'next/navigation';

interface SearchProps {
  placeholder?: string;
}

export function Search({ placeholder = 'Tìm kiếm sản phẩm...' }: SearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const mockResults = [
    { id: '1', name: 'Áo dài tơ tằm', href: '/products/1' },
    { id: '2', name: 'Áo dài gấm', href: '/products/2' },
    { id: '3', name: 'Áo dài xuyên thắng', href: '/products/3' },
  ];

  const filteredResults = query
    ? mockResults.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <motion.div
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 font-sans text-base border border-neutral-light bg-white text-text-primary placeholder-text-tertiary rounded-l-lg transition-all duration-300 focus:outline-none focus:border-accent-brick focus:ring-1 focus:ring-accent-brick"
        />
        <button
          type="submit"
          className="bg-accent-brick text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          Tìm kiếm
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && query && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg border border-neutral-light shadow-lg p-4 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {filteredResults.length > 0 ? (
              <div className="space-y-2">
                {filteredResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery('');
                    }}
                  >
                    <motion.div
                      className="p-3 rounded hover:bg-secondary transition-colors cursor-pointer"
                      whileHover={{ paddingLeft: 16 }}
                    >
                      <p className="font-sans text-sm text-text-primary">
                        {result.name}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-tertiary text-center py-4">
                Không tìm thấy sản phẩm
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </form>
  );
}
