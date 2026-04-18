'use client';

import { useState } from 'react';

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    size: [],
    color: [],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Sản phẩm</h1>

      <div className="grid md:grid-cols-5 gap-8">
        <aside className="md:col-span-1">
          <div className="space-y-6 sticky top-20">
            <div>
              <h3 className="font-semibold mb-3">Giá</h3>
              <input
                type="range"
                min="0"
                max="500"
                className="w-full"
              />
              <p className="text-sm text-gray-600 mt-2">
                0 - 500.000 VNĐ
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="space-y-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <label key={size} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Màu sắc</h3>
              <div className="space-y-2">
                {['Đỏ', 'Xanh', 'Vàng', 'Hồng', 'Trắng'].map((color) => (
                  <label key={color} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="md:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="group overflow-hidden rounded-lg">
                <div className="relative bg-gray-300 aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-medium mt-4">Áo dài {i}</h3>
                <p className="text-gray-600 text-sm">299.000 VNĐ</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
