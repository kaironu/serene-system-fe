'use client';

import { useState } from 'react';
import { useCartStore } from '@/stores/cart';
import { Product, Size } from '@/types';

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Vui lòng chọn size');
      return;
    }

    addItem({
      productId: product.id,
      sizeId: selectedSize.id,
      quantity,
      price: product.price,
    });

    alert('Thêm vào giỏ hàng thành công!');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-3">Size</label>
        <div className="grid grid-cols-3 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size)}
              disabled={size.stock === 0}
              className={`py-2 px-3 border rounded text-sm font-medium transition-colors ${
                selectedSize?.id === size.id
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 hover:border-black'
              } ${size.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Số lượng</label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 border border-gray-300 rounded hover:bg-gray-100"
          >
            -
          </button>
          <span className="w-10 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 border border-gray-300 rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
