export default function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <nav className="space-y-2">
            <a href="/profile" className="block px-4 py-2 rounded hover:bg-gray-100">
              Thông tin cá nhân
            </a>
            <a href="/orders" className="block px-4 py-2 rounded bg-black text-white">
              Đơn hàng
            </a>
            <a href="/addresses" className="block px-4 py-2 rounded hover:bg-gray-100">
              Địa chỉ
            </a>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
              Đăng xuất
            </button>
          </nav>
        </aside>

        <main className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-6">Đơn hàng của tôi</h1>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Mã đơn hàng</p>
                    <p className="font-semibold">#ORD000{i}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Ngày đặt</p>
                    <p className="font-semibold">20/04/2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Trạng thái</p>
                    <p className="font-semibold text-green-600">Đã giao</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tổng tiền</p>
                    <p className="font-semibold">2.990.000 VNĐ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
