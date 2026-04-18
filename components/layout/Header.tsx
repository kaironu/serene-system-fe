'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="border-b border-neutral-light bg-white sticky top-0 z-40 backdrop-blur-sm bg-opacity-95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <motion.div
            className="font-serif text-2xl font-normal tracking-tight text-text-primary"
            whileHover={{ color: 'var(--accent-brick)' }}
            transition={{ duration: 0.3 }}
          >
            Serene System
          </motion.div>
        </Link>

        <nav className="hidden md:flex gap-12">
          {[
            { label: 'Sản phẩm', href: '/products' },
            { label: 'Bộ sưu tập', href: '/collections' },
            { label: 'Về chúng tôi', href: '/#story' },
            { label: 'Liên hệ', href: '/#contact' },
          ].map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="text-sm font-sans text-text-secondary hover:text-accent-brick transition-colors duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex gap-6 items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/cart"
              className="text-sm font-sans text-text-secondary hover:text-accent-brick transition-colors duration-300"
            >
              Giỏ hàng
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/profile"
              className="text-sm font-sans text-text-secondary hover:text-accent-brick transition-colors duration-300"
            >
              Tài khoản
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden border-t border-neutral-light bg-primary"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="px-4 py-4 space-y-4">
            {[
              { label: 'Sản phẩm', href: '/products' },
              { label: 'Bộ sưu tập', href: '/collections' },
              { label: 'Về chúng tôi', href: '/#story' },
              { label: 'Liên hệ', href: '/#contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-sans text-text-secondary hover:text-accent-brick"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
