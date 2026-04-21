'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/lib/catalog';

const mockProducts = products;

const heroSlides = [
  {
    id: 'sai-anh-1',
    title: 'sài ảnh',
    leftImage: 'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=900&q=80',
    rightImage: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'sai-anh-2',
    title: 'uyển gia',
    leftImage: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
    rightImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'sai-anh-3',
    title: 'thanh tự',
    leftImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    rightImage: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1600&q=80',
  },
];

const editorialSections = [
  {
    id: 'sai-anh',
    title: 'SÀI ẢNH',
    description:
      'Xuân ghé thềm, phố thị chậm lại trong những ngày đầu năm. Băng Trang đặt vào Sài Ảnh tinh thần nhẹ, sâu và thanh tân của người phụ nữ Á Đông qua từng đường may thủ công.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80',
    collectionKey: 'collection-1',
  },
  {
    id: 'uyen-gia',
    title: 'UYỂN GIA',
    description:
      'Uyển Gia là bảng màu trầm ấm và những phom dáng mềm, giữ trọn vẻ nền nã nhưng vẫn đủ hiện đại cho nhịp sống hôm nay. Mỗi thiết kế hướng đến cảm giác thư thái và tinh tế.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80',
    collectionKey: 'collection-3',
  },
  {
    id: 'thanh-tu',
    title: 'THANH TỰ',
    description:
      'Thanh Tự được phát triển cho những khoảnh khắc chậm lại, nơi vẻ đẹp được thể hiện bằng chất liệu và tỉ lệ chuẩn mực. Từ chất gấm đến chi tiết đính kết đều hướng về sự cân bằng.',
    image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1600&q=80',
    collectionKey: 'collection-4',
  },
];

const HeroSplit = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (nextIndex: number) => {
    const total = heroSlides.length;
    setActiveSlide((nextIndex + total) % total);
  };

  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="relative grid grid-cols-12 h-[72vh] md:h-155">
          <div className="relative col-span-5 md:col-span-4 overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={`${slide.id}-left`}
                className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={slide.leftImage}
                  alt={`Băng Trang ${slide.title} trái`}
                  fill
                  sizes="(max-width: 768px) 42vw, 33vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="relative col-span-7 md:col-span-8 overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={`${slide.id}-right`}
                className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={slide.rightImage}
                  alt={`Băng Trang ${slide.title} phải`}
                  fill
                  sizes="(max-width: 768px) 58vw, 67vw"
                  loading="eager"
                  className="object-cover"
                />
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-serif text-4xl md:text-6xl text-[#2f4f58]/80 lowercase">
                {heroSlides[activeSlide].title}
              </span>
            </div>

            <div className="absolute bottom-5 right-6 flex items-center gap-3 z-10">
              <button
                type="button"
                onClick={() => handleSlideChange(activeSlide - 1)}
                className="w-8 h-8 rounded-full border border-white/80 text-white bg-black/20 hover:bg-black/35"
                aria-label="Slide trước"
              >
                ‹
              </button>

              <div className="flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={`${slide.id}-dot`}
                    type="button"
                    onClick={() => handleSlideChange(index)}
                    className={`h-2.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/60'}`}
                    aria-label={`Chuyển tới slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleSlideChange(activeSlide + 1)}
                className="w-8 h-8 rounded-full border border-white/80 text-white bg-black/20 hover:bg-black/35"
                aria-label="Slide tiếp theo"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductHighlights = () => (
  <section id="san-pham-moi" className="bg-[#efefef] py-14 md:py-16">
    <div className="w-full px-4 sm:px-6 md:px-10">
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-serif text-3xl uppercase text-[#4f744f] sm:text-4xl md:text-5xl">Sản phẩm mới</h2>
        <Link href="/products" className="text-sm uppercase tracking-[0.14em] text-[#4f744f] hover:opacity-80">
          Xem tất cả
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {mockProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="ve-chung-toi" className="bg-[#0b4d3f] px-4 py-14 sm:px-6 md:px-10 md:py-18">
    <div className="mx-auto w-full max-w-4xl text-[#eef4dc]">
      <h2 className="text-center font-serif text-2xl uppercase tracking-[0.05em] text-[#f1e6c4] sm:text-3xl md:text-6xl">Băng Trang - Tơ Tằm Làng Việt</h2>
      <div className="mx-auto mt-5 h-px w-48 bg-[#c8dcb8]/80" />

      <div className="relative mt-8 border border-[#c8dcb8]/80 px-5 py-6 text-lg leading-relaxed sm:px-6 sm:py-8 sm:text-xl md:px-8 md:py-10 md:text-2xl">
        <p className="text-[#f7f3e4]">
          Băng Trang không bắt đầu từ một nơi chốn, mà bắt đầu từ một cảm giác - khi tụi mình nhận ra rằng, có những ngày người phụ nữ chỉ cần một
          điều rất nhỏ: được mặc đẹp và thấy mình dịu dàng hơn.
        </p>
        <p className="mt-8 text-[#f7f3e4]">
          Từ đó, từng tà áo dài được tạo nên một cách chậm rãi. Không vội vàng, không phô trương, chỉ là sự chăm chút trong từng đường kim mũi chỉ,
          để mỗi lần khoác lên, bạn cảm nhận được sự nhẹ nhàng, mềm mại và gần gũi.
        </p>
        <p className="mt-8 text-[#f7f3e4]">
          Với Băng Trang, áo dài không phải để chờ dịp đặc biệt. Mà là để bạn có thể mặc vào bất kỳ ngày nào - khi bạn muốn yêu thương chính mình
          nhiều hơn một chút.
        </p>
      </div>
    </div>
  </section>
);

const EditorialSection = ({
  section,
  reverse,
}: {
  section: (typeof editorialSections)[number];
  reverse?: boolean;
}) => {
  const relatedProducts = mockProducts
    .filter((product) => product.collections.includes(section.collectionKey))
    .slice(0, 3);

  return (
    <section id={section.id} className={`${reverse ? 'bg-[#f7f6ef]' : 'bg-white'} py-14 md:py-20`}>
      <div className="w-full px-4 sm:px-6 md:px-10">
        <div className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
          <div className="relative h-80 sm:h-105 md:h-155 overflow-hidden">
            <Image
              src={section.image}
              alt={section.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#6d735f]">Bộ sưu tập</p>
            <h3 className="mb-6 font-serif text-4xl text-[#4f744f] md:text-6xl">{section.title}</h3>
            <p className="mb-10 max-w-160 text-base leading-relaxed text-[#5d5d55] md:text-lg">{section.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.14em] text-[#4f744f]">
              <Link href="/collections" className="hover:opacity-80">Xem thêm</Link>
              <Link href="/collections" className="hover:opacity-80">{section.title}</Link>
            </div>

            {relatedProducts.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-5 border-t border-[#d9d6bf] pt-6">
                {relatedProducts.map((product) => (
                  <Link
                    key={`${section.id}-${product.id}`}
                    href={`/products/${product.slug}`}
                    className="text-sm text-[#6d735f] hover:text-[#3f6243]"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Homepage() {
  return (
    <div className="space-y-0">
      <HeroSplit />
      <AboutSection />
      <ProductHighlights />
      {editorialSections.map((section, index) => (
        <EditorialSection
          key={section.id}
          section={section}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
