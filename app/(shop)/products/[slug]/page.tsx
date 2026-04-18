import Image from 'next/image';

const formatVnd = (value: number) => `${value.toLocaleString('vi-VN')}₫`;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mockProduct = {
    id: '1',
    name: 'Đầm Gấm Cổ Yếm Hoa Uyển',
    slug,
    description:
      'Đầm cổ yếm hoa uyển được chế tác từ sự kết hợp giữa gấm hoa văn sắc nét và tơ mềm mỏng xuyên thấu, tạo nên chiều sâu lớp lang tinh tế.',
    price: 2800000,
    originalPrice: undefined,
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1300&q=80',
    ],
    sizes: [
      { id: '1', label: 'L', stock: 0 },
      { id: '2', label: 'M', stock: 0 },
      { id: '3', label: 'S', stock: 0 },
    ],
    collections: ['collection-1'],
    featured: true,
    rating: undefined,
    reviewCount: undefined,
  };

  const sizeGuideText = 'Hướng dẫn chọn size';
  const detailLines = [
    '- Đầm dài: S=132, M=133.5, L=135',
    '- Vòng ngực: 84.5 - 88.5 - 92.5',
    '- Vòng eo: 66 - 70 - 74',
  ];

  return (
    <div className="bg-[#efefef] min-h-screen">
      <div className="w-full px-8 md:px-12 py-8 md:py-10">
        <div className="grid lg:grid-cols-[1.1fr_0.55fr] gap-6 md:gap-8 items-start">
          <div className="grid grid-cols-2 gap-1.5 bg-white">
            {mockProduct.images.map((image, index) => (
              <div key={image} className="relative aspect-4/5 overflow-hidden bg-[#d9d9d9]">
                <Image
                  src={image}
                  alt={`${mockProduct.name} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          <aside className="bg-[#efefef]">
            <h1 className="font-serif text-[36px] leading-tight text-[#4a7444] mb-2">
              {mockProduct.name}
            </h1>

            <p className="text-[42px] leading-none text-[#c16b2b] font-semibold mb-5">
              {formatVnd(mockProduct.price)}
            </p>

            <div className="mb-5">
              <p className="text-sm text-[#55604f] mb-2">Màu sắc: Hồng</p>
              <div className="relative w-12 h-16 border border-[#c8c8c8] overflow-hidden">
                <Image
                  src={mockProduct.images[0]}
                  alt="Màu sắc sản phẩm"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-[#55604f]">Kích thước:</p>
                <button type="button" className="text-sm text-[#607960] underline">
                  {sizeGuideText}
                </button>
              </div>

              <div className="flex gap-2 mb-2">
                {mockProduct.sizes.map((size) => (
                  <span
                    key={size.id}
                    className="w-8 h-8 border border-[#d3d3d3] text-[#8c8c8c] text-xs flex items-center justify-center"
                  >
                    {size.label}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#607960] underline">Chi nhánh còn hàng</p>
            </div>

            <button
              type="button"
              className="w-full h-12 bg-[#4a7444] text-white text-lg hover:bg-[#40653c] transition-colors"
            >
              Tạm hết hàng
            </button>

            <div className="divide-y divide-[#d6d6d6] mt-4 border-y border-[#d6d6d6]">
              <div className="py-3 flex items-center justify-between text-sm text-[#5c6654]">
                <span>096 273 13 33</span>
                <span>Hỗ trợ mua hàng 24/7</span>
              </div>
              <div className="py-3 flex items-center justify-between text-sm text-[#5c6654]">
                <span>Chính sách đổi hàng</span>
                <span>Tìm hiểu thêm</span>
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between text-[#55604f] mb-2">
                <p className="text-base">Thông tin sản phẩm</p>
                <span>⌃</span>
              </div>

              <h2 className="font-serif text-[34px] leading-tight text-[#4a7444] mb-3">Thông tin sản phẩm</h2>

              <div className="space-y-5 text-[#5f6a57]">
                <div>
                  <h3 className="text-sm font-semibold uppercase mb-2">Mô tả chi tiết:</h3>
                  <p className="text-sm leading-7">{mockProduct.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase mb-2">Thông số:</h3>
                  <ul className="space-y-1 text-sm">
                    {detailLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase mb-2">Chất liệu:</h3>
                  <p className="text-sm">Gấm hoa phối tơ mềm mỏng</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
