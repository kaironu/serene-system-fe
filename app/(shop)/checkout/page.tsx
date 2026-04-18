'use client';

import { useState } from 'react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    district: '',
    province: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`p-4 border rounded text-center cursor-pointer transition-all ${
              step >= s ? 'bg-black text-white border-black' : 'border-gray-300'
            }`}
            onClick={() => setStep(s)}
          >
            <div className="font-semibold">Bước {s}</div>
            <div className="text-sm">
              {s === 1 && 'Địa chỉ'}
              {s === 2 && 'Thanh toán'}
              {s === 3 && 'Xác nhận'}
            </div>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="border rounded-lg p-8 space-y-6">
          <h2 className="text-xl font-semibold mb-6">Địa chỉ giao hàng</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Họ tên</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Nhập họ tên"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Nhập email"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Số nhà, tên đường"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Quận/Huyện</label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="">Chọn quận/huyện</option>
                <option value="q1">Quận 1</option>
                <option value="q2">Quận 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tỉnh/Thành phố</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="">Chọn tỉnh/thành phố</option>
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="hn">Hà Nội</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800"
          >
            Tiếp tục
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="border rounded-lg p-8 space-y-6">
          <h2 className="text-xl font-semibold mb-6">Phương thức thanh toán</h2>

          <div className="space-y-3">
            {[
              { id: 'cod', label: 'Thanh toán khi nhận hàng (COD)' },
              { id: 'transfer', label: 'Chuyển khoản ngân hàng' },
              { id: 'vnpay', label: 'Thanh toán qua VNPay' },
            ].map((method) => (
              <label key={method.id} className="flex items-center border rounded p-4 cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={formData.paymentMethod === method.id}
                  onChange={handleChange}
                  className="mr-3"
                />
                <span>{method.label}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border border-gray-300 py-3 rounded font-medium hover:bg-gray-50"
            >
              Quay lại
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 bg-black text-white py-3 rounded font-medium hover:bg-gray-800"
            >
              Tiếp tục
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="border rounded-lg p-8 space-y-6">
          <h2 className="text-xl font-semibold mb-6">Xác nhận đơn hàng</h2>

          <div className="bg-gray-50 p-6 rounded space-y-3">
            <div className="flex justify-between">
              <span>Sản phẩm</span>
              <span className="font-medium">2.990.000 VNĐ</span>
            </div>
            <div className="flex justify-between">
              <span>Thuế</span>
              <span className="font-medium">299.000 VNĐ</span>
            </div>
            <div className="flex justify-between">
              <span>Vận chuyển</span>
              <span className="font-medium">30.000 VNĐ</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold">
              <span>Tổng cộng</span>
              <span>3.319.000 VNĐ</span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="text-sm text-blue-800">
              Đơn hàng sẽ được gửi tới: {formData.address}, {formData.district}, {formData.province}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800"
          >
            Đặt hàng
          </button>
        </div>
      )}
    </div>
  );
}
