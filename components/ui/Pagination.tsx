'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  baseUrl: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  baseUrl,
}: PaginationProps) {
  const pages = [];
  const maxVisible = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Link
        href={`${baseUrl}?page=${Math.max(1, currentPage - 1)}`}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(Math.max(1, currentPage - 1));
        }}
        className="px-3 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        ← Trước
      </Link>

      {startPage > 1 && (
        <>
          <Link href={`${baseUrl}?page=1`} onClick={() => onPageChange(1)} className="px-3 py-2 border rounded hover:bg-gray-100">
            1
          </Link>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          onClick={(e) => {
            e.preventDefault();
            onPageChange(page);
          }}
          className={`px-3 py-2 border rounded ${
            page === currentPage
              ? 'bg-black text-white border-black'
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span>...</span>}
          <Link href={`${baseUrl}?page=${totalPages}`} onClick={() => onPageChange(totalPages)} className="px-3 py-2 border rounded hover:bg-gray-100">
            {totalPages}
          </Link>
        </>
      )}

      <Link
        href={`${baseUrl}?page=${Math.min(totalPages, currentPage + 1)}`}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(Math.min(totalPages, currentPage + 1));
        }}
        className="px-3 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        Sau →
      </Link>
    </div>
  );
}
