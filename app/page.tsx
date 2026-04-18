'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';

const mockProducts = [
  {
    id: '1',
    name: 'Áo dài tơ tằm Đào Loan',
    slug: 'ao-dai-dao-loan',
    description: 'Áo dài với thiết kế tỉ mỉ, chất liệu lụa tự nhiên',
    price: 3850000,
    originalPrice: 4500000,
    images: [
      'https://via.placeholder.com/500x600?text=Áo+dài+Đào+Loan',
    ],
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
    description: 'Đầm tơ với cổ yếm truyền thống',
    price: 2480000,
    originalPrice: undefined,
    images: [
      'https://via.placeholder.com/500x600?text=Đầm+Thanh+Hoa',
    ],
    sizes: [],
    collections: ['collection-1'],
    featured: true,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: '3',
    name: 'Áo gấm Diệu Hoa',
    slug: 'ao-gam-dieu-hoa',
    description: 'Áo gấm với họa tiết Diệu Hoa',
    price: 1990000,
    originalPrice: 2400000,
    images: [
      'https://via.placeholder.com/500x600?text=Áo+gấm+Diệu+Hoa',
    ],
    sizes: [],
    collections: ['collection-2'],
    featured: true,
    rating: 4.7,
    reviewCount: 124,
  },
  {
    id: '4',
    name: 'Áo tơ Hoa Cầm',
    slug: 'ao-to-hoa-cam',
    description: 'Áo tơ tinh tế với hoa cầm',
    price: 1290000,
    originalPrice: undefined,
    images: [
      'https://via.placeholder.com/500x600?text=Áo+tơ+Hoa+Cầm',
    ],
    sizes: [],
    collections: ['collection-2'],
    featured: true,
    rating: 4.5,
    reviewCount: 67,
  },
];

const StorySection = () => (
  <Section className="bg-secondary/50" fullWidth>
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-sans text-sm uppercase tracking-widest text-accent-brick mb-6">
          Câu chuyện của chúng tôi
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-6 leading-tight">
          Nét đẹp truyền thống, tinh thần hiện đại
        </h2>
        <p className="font-sans text-lg text-text-secondary leading-relaxed mb-8">
          Mỗi chiếc áo dài Serene System là kết quả của sự chăm chút tinh tế, kỹ thuật may đo tỉ mỉ kết hợp với những thiết kế hiện đại. Chúng tôi tin rằng áo dài không chỉ là trang phục mà còn là biểu tượng của vẻ đẹp nền nã, thanh lịch của người phụ nữ Việt.
        </p>
        <p className="font-sans text-lg text-text-secondary leading-relaxed mb-12">
          Với từng bộ sưu tập, chúng tôi mang câu chuyện Việt - những câu chuyện về quê hương, về ký ức, về những khoảnh khắc thanh tịnh.
        </p>
        <Link href="/about">
          <Button variant="primary" size="lg">
            Tìm hiểu thêm
          </Button>
        </Link>
      </motion.div>

      <motion.div
        className="relative h-96 md:h-full rounded-lg overflow-hidden"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="https://via.placeholder.com/600x800?text=Serene+Story"
          alt="Serene System Story"
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </motion.div>
    </div>
  </Section>
);

const CollectionShowcase = () => (
  <Section title="Bộ sưu tập nổi bật" subtitle="Các bộ sưu tập mới nhất" fullWidth>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            id: '1',
            name: 'Sài Ảnh',
            description: 'Khám phá vẻ đẹp của Sài Gòn hộp mộng',
            image: 'https://via.placeholder.com/600x400?text=Sài+Ảnh',
          },
          {
            id: '2',
            name: 'Uyển Gia',
            description: 'Từ những khoảnh khắc yên tĩnh',
            image: 'https://via.placeholder.com/600x400?text=Uyển+Gia',
          },
          {
            id: '3',
            name: 'Thanh Tự',
            description: 'Tinh tế trong từng chi tiết',
            image: 'https://via.placeholder.com/600x400?text=Thanh+Tự',
          },
        ].map((collection, i) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/collections/${collection.id}`}>
              <div className="group cursor-pointer">
                <div className="relative h-96 rounded-lg overflow-hidden mb-6 hover-lift">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-2xl text-text-primary mb-3">
                  {collection.name}
                </h3>
                <p className="font-sans text-text-secondary mb-4">
                  {collection.description}
                </p>
                <span className="text-accent-brick font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Xem bộ sưu tập →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

const FeaturedProducts = () => (
  <Section title="Sản phẩm nổi bật" subtitle="Những thiết kế được yêu thích" fullWidth>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </Section>
);

const ContactSection = () => (
  <Section className="bg-gradient-to-br from-accent-black to-accent-jade text-white" fullWidth>
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-serif text-5xl md:text-6xl mb-6">
          Hãy liên hệ với chúng tôi
        </h2>
        <p className="font-sans text-lg mb-12 text-white/80">
          Bạn có câu hỏi hoặc muốn tìm hiểu thêm về các sản phẩm của Serene System? Chúng tôi luôn sẵn sàng giúp bạn.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:0962731333">
            <Button variant="primary" size="lg" className="bg-white text-accent-black hover:bg-opacity-90">
              Gọi ngay: 096 273 13 33
            </Button>
          </a>
          <a href="mailto:support@serene-system.com">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Gửi email
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </Section>
);

export default function Homepage() {
  return (
    <div className="space-y-0">
      <Hero
        title="Serene System"
        subtitle="Áo dài - Nét đẹp truyền thống"
        description="Khám phá bộ sưu tập áo dài sang trọng, được thiết kế với tình yêu và sự chân thành cho những người phụ nữ yêu quý giá trị truyền thống."
        image="https://via.placeholder.com/1920x1080?text=Serene+System+Hero"
        cta={{ text: 'Khám phá sản phẩm', href: '/products' }}
        ctaSecondary={{ text: 'Xem bộ sưu tập', href: '/collections' }}
      />

      <StorySection />
      <CollectionShowcase />
      <FeaturedProducts />
      <ContactSection />
    </div>
  );
}
