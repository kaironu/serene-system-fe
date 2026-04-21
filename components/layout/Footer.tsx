'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Music2, Phone, Youtube } from 'lucide-react';

export default function Footer() {
  const policyLinks = [
    { label: 'Tìm kiếm', href: '/search' },
    { label: 'Chính sách bảo mật', href: '/privacy' },
    { label: 'Chính sách thanh toán', href: '/payment' },
    { label: 'Chính sách vận chuyển', href: '/shipping' },
    { label: 'Chính sách đổi hàng', href: '/returns' },
    { label: 'Chính sách xử lý khiếu nại', href: '/complaint-policy' },
    { label: 'Chính sách kiểm hàng', href: '/inspection-policy' },
    { label: 'Hướng dẫn mua hàng', href: '/shopping-guide' },
  ];

  return (
    <footer className="bg-[#0b4f40] text-[#f4f0dd] mt-0">
      <div className="w-full px-5 md:px-10 py-8 md:py-10">
        <div className="grid md:grid-cols-3 gap-7 md:gap-8">
          <div>
            <h3
              className="inline-block font-serif text-4xl md:text-5xl leading-[1.15] tracking-wide mb-5 pb-1 bg-linear-to-r from-[#fff7d9] via-[#f4d991] to-[#fff7d9] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
              style={{
                backgroundSize: '220% 100%',
                animation: 'brandShimmer 5.5s ease-in-out infinite',
              }}
            >
              Băng Trang
            </h3>

            <p className="mb-3 font-serif text-xl text-[#fff8df] md:text-2xl">Thông tin liên hệ</p>

            <div className="space-y-2.5 text-sm md:text-base leading-relaxed text-[#fff8e8] [&_p]:text-[#fff8e8] [&_span]:text-[#fff8e8] [&_svg]:text-[#d8d3b7]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span className="font-medium">Băng Trang Hà Nội:<br />103C2 Phạm Ngọc Thạch, Đống Đa, Hà Nội</span>
              </p>
              <p className="pl-7 font-medium">Băng Trang Sài Gòn:<br />283 Lý Tự Trọng, Quận 1, Hồ Chí Minh</p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="font-medium">Số điện thoại: 096 273 13 33</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-medium">Email: support@bangtrang.vn</span>
              </p>
              <p className="pl-7 font-medium">Thời gian mở cửa: Thứ 2 đến Chủ Nhật từ 8h30 đến 22h</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-serif mb-3">Đăng ký Email</h3>

            <form className="flex h-11 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn..."
                className="flex-1 px-4 bg-white text-[#0b4f40] placeholder:text-[#7f8c86] outline-none text-sm"
              />
              <button
                type="submit"
                className="px-5 bg-[#d8d3b7] text-[#0b4f40] hover:bg-[#e5dfc4] transition-colors text-sm"
              >
                Đăng ký
              </button>
            </form>

            <div className="flex flex-wrap gap-2 text-sm md:text-[15px] leading-5">
              {policyLinks.map((item) => (
                <span key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-[#f8f2da] hover:bg-[#d8d3b7] hover:text-[#0b4f40] transition-colors"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-serif mb-3">Phương thức thanh toán</h3>
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 mb-5 rounded-md">
              <span className="font-semibold text-sm text-[#35a1ff]">VNPay</span>
              <span className="text-xs text-[#f4f0dd]">scan to pay</span>
            </div>

            <h3 className="text-xl md:text-2xl font-serif mb-3">Kết nối cùng Băng Trang</h3>
            <div className="flex items-center gap-2 mb-5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Music2 className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#1f90d8] px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold">
              <span className="w-5 h-5 rounded-full bg-white/90 text-[#1f90d8] flex items-center justify-center">✓</span>
              ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d8d3b7]/60 py-3 text-center text-sm text-[#efe8cc]">
        Copyrights © 2026 by Băng Trang
      </div>

      <style jsx>{`
        @keyframes brandShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
}
