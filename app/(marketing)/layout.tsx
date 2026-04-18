import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serene Shop - Áo dài truyền thống',
  description: 'Khám phá bộ sưu tập áo dài đẹp với thiết kế hiện đại',
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
