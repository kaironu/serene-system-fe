# Quick Start Guide - Serene System

## 1. Khởi Động Project

```bash
# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev
```

Truy cập [http://localhost:3000](http://localhost:3000)

## 2. File Cấu Hình Quan Trọng

### Environment Variables
Tạo `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Next.js Config
`next.config.ts` - Cấu hình Image optimization, transpile packages

### Tailwind Config
`tailwind.config.js` - Tailwind CSS configuration

### TypeScript
`tsconfig.json` - TypeScript strict mode

## 3. Tạo Page Mới

### Ví dụ: Tạo About Page

```bash
# Tạo folder
mkdir -p app/(marketing)/about

# Tạo file page.tsx
```

`app/(marketing)/about/page.tsx`:
```tsx
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Về Serene System</h1>
      <p className="text-gray-600">Content here...</p>
    </div>
  );
}
```

## 4. Tạo Component Mới

### Ví dụ: Feature Section Component

`components/collection/FeatureSection.tsx`:
```tsx
export default function FeatureSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Tính năng</h2>
        {/* Content */}
      </div>
    </section>
  );
}
```

## 5. Thêm Zustand Store

### Ví dụ: Notification Store

`stores/notification.ts`:
```tsx
import { create } from 'zustand';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface NotificationStore {
  notifications: Notification[];
  add: (message: string, type: Notification['type']) => void;
  remove: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  
  add: (message, type) => {
    const id = Date.now().toString();
    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }));
    setTimeout(() => set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })), 3000);
  },

  remove: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },
}));
```

## 6. Thêm API Endpoint

### Ví dụ: Search API

`app/api/search/route.ts`:
```tsx
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  try {
    const response = await fetch(
      `${process.env.API_BASE_URL || 'http://localhost:5000/api'}/search?q=${query}`
    );
    return Response.json(await response.json());
  } catch (error) {
    return Response.json({ error: 'Search failed' }, { status: 500 });
  }
}
```

## 7. Sử Dụng Cart Store

```tsx
'use client';

import { useCartStore } from '@/stores/cart';

export function CartWidget() {
  const { cart, addItem } = useCartStore();

  return (
    <div>
      <p>{cart.items.length} sản phẩm</p>
      <p>Tổng: {cart.total.toLocaleString('vi-VN')} VNĐ</p>
    </div>
  );
}
```

## 8. Làm Việc Với Types

Thêm type mới vào `types/index.ts`:
```tsx
export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  author: string;
  createdAt: string;
}
```

## 9. Cấu Trúc CSS

Không sử dụng CSS Modules, chỉ dùng Tailwind classes:

```tsx
// ✅ Good
<div className="max-w-7xl mx-auto px-4 py-12">
  <h1 className="text-3xl font-bold mb-6">Title</h1>
</div>

// ❌ Avoid
import styles from './component.module.css';
<div className={styles.container}>
```

## 10. Git Workflow

```bash
# Tạo branch mới
git checkout -b feature/product-filters

# Commit thay đổi
git add .
git commit -m "Add product filter component"

# Push lên remote
git push origin feature/product-filters

# Tạo Pull Request trên GitHub
```

## 11. Performance Tips

- ✅ Sử dụng Image component cho images
- ✅ Lazy load components với dynamic import
- ✅ Optimize database queries
- ✅ Cache API responses
- ✅ Use Server Components by default

## 12. Common Tasks

### Thêm Route Mới
1. Tạo folder: `app/(group)/page-name/`
2. Tạo file: `page.tsx`
3. Thêm link vào Header/navigation

### Thêm Product Filter
1. Tạo component: `components/product/FilterGroup.tsx`
2. Add state với `useFilters()` hook
3. Pass filters tới API

### Tích Hợp Payment Gateway
1. Tạo API endpoint: `app/api/payment/`
2. Call payment provider API
3. Handle webhook untuk confirmation

## 13. Troubleshooting

### Zustand Store không lưu data
- Kiểm tra `persist` middleware
- Xóa localStorage: `localStorage.clear()`

### Image không load
- Kiểm tra `next.config.ts` image domains
- Xem console errors

### API không call được
- Kiểm tra `.env.local` NEXT_PUBLIC_API_URL
- Kiểm tra CORS headers

## 14. Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Zustand Docs](https://github.com/pmndrs/zustand)

---

**Cần giúp?** Xem `PROJECT.md` hoặc `ARCHITECTURE.md` để biết thêm chi tiết.
