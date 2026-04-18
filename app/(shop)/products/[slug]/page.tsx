import AddToCart from '@/components/product/AddToCart';

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const mockProduct = {
    id: '1',
    name: 'Áo dài truyền thống',
    slug: params.slug,
    description: 'Áo dài với thiết kế tỉ mỉ, chất liệu lụa tự nhiên',
    price: 299000,
    originalPrice: 399000,
    images: [
      'https://via.placeholder.com/500x600',
      'https://via.placeholder.com/500x600',
      'https://via.placeholder.com/500x600',
    ],
    sizes: [
      { id: '1', label: 'XS', stock: 5 },
      { id: '2', label: 'S', stock: 10 },
      { id: '3', label: 'M', stock: 15 },
      { id: '4', label: 'L', stock: 8 },
      { id: '5', label: 'XL', stock: 3 },
      { id: '6', label: 'XXL', stock: 0 },
    ],
    collections: ['collection-1'],
    featured: true,
    rating: 4.5,
    reviewCount: 120,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          {mockProduct.images.map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 aspect-square rounded-lg flex items-center justify-center"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg" />
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{mockProduct.name}</h1>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({mockProduct.reviewCount} đánh giá)
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold">{mockProduct.price.toLocaleString('vi-VN')} VNĐ</span>
            <span className="text-lg text-gray-400 line-through">
              {mockProduct.originalPrice?.toLocaleString('vi-VN')} VNĐ
            </span>
          </div>

          <p className="text-gray-600 mb-8">
            {mockProduct.description}
          </p>

          <AddToCart product={mockProduct} />

          <div className="mt-12 space-y-6 border-t pt-8">
            <div>
              <h3 className="font-semibold mb-2">Chất liệu</h3>
              <p className="text-gray-600">Lụa tơ tằm 100%</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Chế độ bảo hành</h3>
              <p className="text-gray-600">Bảo hành 12 tháng</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Vận chuyển</h3>
              <p className="text-gray-600">Miễn phí vận chuyển cho đơn hàng trên 500.000 VNĐ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
