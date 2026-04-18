'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nguyễn Văn A',
    email: 'user@example.com',
    phone: '0912345678',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <nav className="space-y-2">
            <Link
              href="/profile"
              className="block px-4 py-2 rounded bg-black text-white"
            >
              Thông tin cá nhân
            </Link>
            <Link
              href="/orders"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Đơn hàng
            </Link>
            <Link
              href="/addresses"
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Địa chỉ
            </Link>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
              Đăng xuất
            </button>
          </nav>
        </aside>

        <main className="md:col-span-3">
          <div className="border rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm border rounded px-4 py-2 hover:bg-gray-50"
              >
                {isEditing ? 'Hủy' : 'Chỉnh sửa'}
              </button>
            </div>

            {isEditing ? (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ tên</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-full bg-black text-white py-2 rounded font-medium hover:bg-gray-800"
                >
                  Lưu thay đổi
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Họ tên</p>
                  <p className="font-medium">{profile.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Số điện thoại</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
