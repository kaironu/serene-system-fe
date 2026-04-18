'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const menuItems = [
    { label: 'Sản phẩm', href: isHome ? '#san-pham-moi' : '/products' },
    { label: 'Bộ sưu tập', href: isHome ? '#sai-anh' : '/collections' },
    { label: 'Giá ưu đãi', href: isHome ? '#uyen-gia' : '/collections' },
    { label: 'Nàng thơ', href: isHome ? '#thanh-tu' : '/collections/nang-tho' },
    { label: 'Về Bàng Trang', href: '/about' },
  ];

  return (
    <header className="bg-[#ebe9d2] border-b border-[#d9d6bf] sticky top-0 z-40">
      <div className="w-full h-20 px-8 md:px-10 grid grid-cols-[300px_1fr_150px] items-center gap-4">
        <Link href="/" className="font-serif text-5xl leading-none whitespace-nowrap text-[#4f744f] tracking-tight">
          Bàng Trang
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-10 text-[15px] uppercase tracking-[0.16em] text-[#6d735f]">
          {menuItems.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="hover:text-[#3f6243] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4 text-[#6d735f]">
          <Link href="/cart" aria-label="Giỏ hàng" className="hover:text-[#3f6243]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.4 10.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H7" />
            </svg>
          </Link>
          <Link href="/search" aria-label="Tìm kiếm" className="hover:text-[#3f6243]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <Link href="/account" aria-label="Tài khoản" className="hover:text-[#3f6243]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.6-3.4 4.2-5 8-5s6.4 1.6 8 5" />
            </svg>
          </Link>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#d9d6bf] bg-[#ebe9d2]">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="block text-sm uppercase tracking-wide text-[#6d735f] hover:text-[#3f6243]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
