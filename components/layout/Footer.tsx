'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Về chúng tôi',
      links: [
        { label: 'Câu chuyện Serene', href: '/#story' },
        { label: 'Liên hệ', href: '/#contact' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Chính sách',
      links: [
        { label: 'Chính sách bảo mật', href: '/privacy' },
        { label: 'Chính sách thanh toán', href: '/payment' },
        { label: 'Chính sách vận chuyển', href: '/shipping' },
      ],
    },
    {
      title: 'Hỗ trợ',
      links: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Chính sách đổi trả', href: '/returns' },
        { label: 'Liên hệ hỗ trợ', href: '/support' },
      ],
    },
  ];

  return (
    <footer className="bg-accent-black text-white border-t border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-normal mb-4">
              Serene System
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Áo dài truyền thống với thiết kế hiện đại, mang đến vẻ đẹp sang trọng cho phụ nữ Việt.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-serif text-sm uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-white/70 hover:text-accent-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          {/* Contact Info */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="font-serif text-sm uppercase tracking-widest mb-2">
                Liên hệ
              </p>
              <p className="font-sans text-sm text-white/70">
                Điện thoại:{' '}
                <a
                  href="tel:0962731333"
                  className="text-accent-gold hover:underline"
                >
                  096 273 13 33
                </a>
              </p>
              <p className="font-sans text-sm text-white/70">
                Email:{' '}
                <a
                  href="mailto:support@serene-system.com"
                  className="text-accent-gold hover:underline"
                >
                  support@serene-system.com
                </a>
              </p>
            </div>

            <div>
              <p className="font-serif text-sm uppercase tracking-widest mb-2">
                Theo dõi chúng tôi
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', href: 'https://facebook.com' },
                  { name: 'Instagram', href: 'https://instagram.com' },
                  { name: 'TikTok', href: 'https://tiktok.com' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/70 hover:text-accent-gold transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-white/10 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-xs text-white/50">
              &copy; {new Date().getFullYear()} Serene System. All rights reserved.
            </p>
            <p className="font-sans text-xs text-white/50 mt-2">
              Design by Serene System Team
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
