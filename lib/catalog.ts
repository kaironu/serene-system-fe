import { Collection, Product } from '@/types';

export const collections: Collection[] = [
  {
    id: 'collection-1',
    name: 'Sài Ảnh',
    slug: 'sai-anh',
    description: 'Tinh thần thanh lịch và mềm mại của người phụ nữ Á Đông.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=80',
    productCount: 2,
  },
  {
    id: 'collection-2',
    name: 'Thanh Tự',
    slug: 'thanh-tu',
    description: 'Phom dáng chuẩn mực, bảng màu trầm ấm và tinh tế.',
    image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1800&q=80',
    productCount: 2,
  },
  {
    id: 'collection-3',
    name: 'Uyển Gia',
    slug: 'uyen-gia',
    description: 'Nhẹ nhàng, nền nã và phù hợp nhịp sống hiện đại.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1800&q=80',
    productCount: 2,
  },
  {
    id: 'collection-4',
    name: 'Nàng Thơ',
    slug: 'nang-tho',
    description: 'Nét thơ trong chất liệu gấm và kỹ thuật may thủ công.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    banner: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80',
    productCount: 2,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Áo dài tơ tằm Đào Loan',
    slug: 'ao-dai-dao-loan',
    description: 'Áo dài với thiết kế tỉ mỉ, chất liệu lụa tự nhiên.',
    price: 3850000,
    originalPrice: 4500000,
    images: ['https://picsum.photos/500/600?random=1'],
    sizes: [
      { id: '1', label: 'XS', stock: 5 },
      { id: '2', label: 'S', stock: 10 },
    ],
    collections: ['collection-1'],
    featured: true,
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: '2',
    name: 'Đầm tơ cổ yếm Thanh Hoa',
    slug: 'dam-to-thanh-hoa',
    description: 'Đầm tơ với cổ yếm truyền thống.',
    price: 2480000,
    images: ['https://picsum.photos/500/600?random=2'],
    sizes: [
      { id: '3', label: 'S', stock: 8 },
      { id: '4', label: 'M', stock: 6 },
    ],
    collections: ['collection-1'],
    featured: true,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: '3',
    name: 'Áo gấm Diệu Hoa',
    slug: 'ao-gam-dieu-hoa',
    description: 'Áo gấm với họa tiết Diệu Hoa.',
    price: 1990000,
    originalPrice: 2400000,
    images: ['https://picsum.photos/id/1062/500/600'],
    sizes: [
      { id: '5', label: 'M', stock: 7 },
      { id: '6', label: 'L', stock: 4 },
    ],
    collections: ['collection-2'],
    featured: true,
    rating: 4.7,
    reviewCount: 124,
  },
  {
    id: '4',
    name: 'Áo tơ Hoa Cầm',
    slug: 'ao-to-hoa-cam',
    description: 'Áo tơ tinh tế với hoa cầm.',
    price: 1290000,
    images: ['https://picsum.photos/500/600?random=4'],
    sizes: [
      { id: '7', label: 'S', stock: 9 },
      { id: '8', label: 'M', stock: 5 },
    ],
    collections: ['collection-2'],
    featured: true,
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: '5',
    name: 'Đầm tơ Thụy Hoa',
    slug: 'dam-to-thuy-hoa',
    description: 'Đầm tơ mềm mại với chi tiết thủ công.',
    price: 1990000,
    images: ['https://picsum.photos/id/1027/500/600'],
    sizes: [
      { id: '9', label: 'M', stock: 6 },
      { id: '10', label: 'L', stock: 4 },
    ],
    collections: ['collection-3'],
    featured: true,
    rating: 4.6,
    reviewCount: 52,
  },
  {
    id: '6',
    name: 'Áo yếm gấm Mộng Hoa',
    slug: 'ao-yem-gam-mong-hoa',
    description: 'Thiết kế trẻ trung trên chất liệu gấm cao cấp.',
    price: 1290000,
    images: ['https://picsum.photos/id/1037/500/600'],
    sizes: [
      { id: '11', label: 'S', stock: 3 },
      { id: '12', label: 'M', stock: 7 },
    ],
    collections: ['collection-3'],
    featured: true,
    rating: 4.4,
    reviewCount: 38,
  },
  {
    id: '7',
    name: 'Áo yếm gấm Hoa Đan',
    slug: 'ao-yem-gam-hoa-dan',
    description: 'Sang trọng, mềm mại và đậm nét Á Đông.',
    price: 1290000,
    images: ['https://picsum.photos/id/1048/500/600'],
    sizes: [
      { id: '13', label: 'M', stock: 8 },
      { id: '14', label: 'L', stock: 5 },
    ],
    collections: ['collection-4'],
    featured: true,
    rating: 4.5,
    reviewCount: 47,
  },
  {
    id: '8',
    name: 'Áo dài nhung Tường Thy',
    slug: 'ao-dai-nhung-tuong-thy',
    description: 'Phom dáng nền nã với chất nhung tinh tế.',
    price: 3290000,
    originalPrice: 3650000,
    images: ['https://picsum.photos/id/1060/500/600'],
    sizes: [
      { id: '15', label: 'L', stock: 2 },
      { id: '16', label: 'XL', stock: 1 },
    ],
    collections: ['collection-4'],
    featured: true,
    rating: 4.9,
    reviewCount: 71,
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((collection) => collection.slug === slug);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCollectionId = (collectionId: string) =>
  products.filter((product) => product.collections.includes(collectionId));
