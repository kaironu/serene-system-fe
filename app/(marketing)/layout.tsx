import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Serene System - Áo dài truyền thống',
  description: 'Khám phá bộ sưu tập áo dài đẹp với thiết kế hiện đại',
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
