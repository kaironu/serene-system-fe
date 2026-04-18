# Serene System - Áo Dài Store

Một platform thương mại điện tử chuyên bán áo dài truyền thống với thiết kế hiện đại, xây dựng bằng Next.js 15+ với App Router.

## Tính năng

- **Trang chủ**: Hero section, featured collections, giới thiệu, liên hệ
- **Bộ sưu tập**: Hiển thị và xem chi tiết bộ sưu tập
- **Sản phẩm**: Danh sách sản phẩm với bộ lọc, chi tiết sản phẩm với tùy chọn size và số lượng
- **Giỏ hàng**: Quản lý sản phẩm trong giỏ với Zustand store
- **Checkout**: Quy trình thanh toán multi-step (địa chỉ, phương thức thanh toán, xác nhận)
- **Tài khoản**: Profil người dùng, đơn hàng, địa chỉ

## Cấu trúc Project

```
web/
├── app/                      # Next.js App Router
│   ├── (marketing)/         # Route group - marketing pages
│   │   ├── page.tsx         # Homepage
│   │   ├── collections/     # Collections
│   │   └── layout.tsx
│   ├── (shop)/              # Route group - shopping
│   │   ├── products/        # Products listing & detail
│   │   ├── cart/            # Shopping cart
│   │   ├── checkout/        # Checkout process
│   │   └── layout.tsx
│   ├── (account)/           # Route group - user account
│   │   ├── profile/         # User profile
│   │   ├── orders/          # Order history
│   │   └── layout.tsx
│   ├── api/                 # API routes (BFF)
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── ui/                  # Base UI components (Button, Input, Card)
│   ├── layout/              # Layout components (Header, Footer)
│   ├── product/             # Product components (ProductCard, AddToCart)
│   └── collection/          # Collection components
├── features/                # Feature-Sliced Design
│   ├── product/
│   ├── cart/
│   ├── collection/
│   └── auth/
├── hooks/                   # Custom hooks (useCart)
├── stores/                  # Zustand stores (cart, auth, wishlist)
├── types/                   # TypeScript types & interfaces
├── lib/                     # Utilities & API client
└── public/                  # Static assets
```

## Cài đặt

### Prerequisites
- Node.js 18+
- npm hoặc yarn

### Setup

```bash
# Cài đặt dependencies
npm install

# Tạo .env.local từ .env.local.example
cp .env.local.example .env.local

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Development

- Chỉnh sửa `app/` để tạo pages và layouts
- Chỉnh sửa `components/` để tạo UI components
- Chỉnh sửa `stores/` để quản lý state

## Build & Deploy

```bash
# Build production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Kiến trúc & Pattern

- **App Router**: Sử dụng Next.js 15+ App Router với route groups
- **Feature-Sliced Design**: Tổ chức code theo tính năng trong `features/`
- **Zustand**: State management cho cart, auth, wishlist
- **Server Components**: Pages là server components mặc định
- **Client Components**: Các interactive components dùng `'use client'`
- **Route Handlers**: API routes trong `app/api/`

## Environment Variables

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Công nghệ

- **Next.js**: 16.2.4
- **React**: 19.2.4
- **TypeScript**: 5
- **Tailwind CSS**: 4
- **Zustand**: 4.4.1

## Lưu ý

- Images sử dụng Next.js Image component
- CSS Modules và Tailwind CSS cho styling
- API routes là BFF (Backend For Frontend) - proxy requests đến .NET services
- Cart state persist trong localStorage qua Zustand middleware
