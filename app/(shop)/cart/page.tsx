'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Giỏ hàng</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-6">Giỏ hàng của bạn trống</p>
          <Link
            href="/products"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.sizeId}`}
                  className="border rounded-lg p-4 flex items-center gap-4"
                >
                  <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0" />

                  <div className="flex-1">
                    <h3 className="font-medium">Sản phẩm</h3>
                    <p className="text-sm text-gray-600">Size: M</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.sizeId,
                          item.quantity - 1
                        )
                      }
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.sizeId,
                          item.quantity + 1
                        )
                      }
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right w-24">
                    <p className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.productId, item.sizeId)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border rounded-lg p-6 h-fit sticky top-20">
            <h3 className="font-semibold mb-4">Tóm tắt đơn hàng</h3>

            <div className="space-y-2 mb-4 pb-4 border-b text-sm">
              <div className="flex justify-between">
                <span>Tạm tính</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Thuế</span>
                <span>{formatPrice(total * 0.1)}</span>
              </div>
              <div className="flex justify-between">
                <span>Vận chuyển</span>
                <span>30.000 VNĐ</span>
              </div>
            </div>

            <div className="flex justify-between font-bold mb-6">
              <span>Tổng cộng</span>
              <span>{formatPrice(total + total * 0.1 + 30000)}</span>
            </div>

            <Link
              href="/checkout"
              className="w-full block text-center bg-black text-white py-3 rounded font-medium hover:bg-gray-800"
            >
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
