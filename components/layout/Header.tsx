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
    { label: 'Về Băng Trang', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#c8dcb8]/50 bg-[#0b4f40]">
      <div className="grid h-20 w-full grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:h-24 md:grid-cols-[360px_1fr_150px] md:px-10">
        <Link href="/" className="flex h-12 w-full max-w-44 items-center sm:h-14 sm:max-w-52 md:h-20 md:max-w-80">
          <img
            src="/images/Logo.png"
            alt="Logo Băng Trang"
            className="h-full w-full object-contain"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-10 text-[15px] uppercase tracking-[0.16em] text-[#d7e8de] md:flex">
          {menuItems.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className="transition-colors hover:text-[#f1e6c4]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 text-[#d7e8de] md:gap-4">
          <Link href="/cart" aria-label="Giỏ hàng" className="hidden transition-colors hover:text-[#f1e6c4] sm:inline-flex">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.4 10.5a2 2 0 0 0 2 1.5h7.8a2 2 0 0 0 2-1.6L21 7H7" />
            </svg>
          </Link>
          <Link href="/search" aria-label="Tìm kiếm" className="hidden transition-colors hover:text-[#f1e6c4] md:inline-flex">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
          <Link href="/account" aria-label="Tài khoản" className="hidden transition-colors hover:text-[#f1e6c4] md:inline-flex">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.6-3.4 4.2-5 8-5s6.4 1.6 8 5" />
            </svg>
          </Link>

          <button
            className="text-[#f1e6c4] md:hidden"
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
        <div className="border-t border-[#c8dcb8]/40 bg-[#0b4f40] md:hidden">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="block text-sm uppercase tracking-wide text-[#d7e8de] hover:text-[#f1e6c4]"
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
