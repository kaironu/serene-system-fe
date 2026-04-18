# Cấu Trúc Dự Án Serene System - Hoàn Chỉnh

## Tổng Quan

Dự án được xây dựng theo **Feature-Sliced Design** với **Next.js 15+ App Router** và **Zustand** để quản lý state. Code theo phong cách tự nhiên, không có comment máy móc.

## Cây Thư Mục Chi Tiết

```
web/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx              # Layout cho phần marketing
│   │   ├── page.tsx                # Homepage với hero, featured collections
│   │   ├── collections/
│   │   │   ├── page.tsx            # Danh sách bộ sưu tập
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Chi tiết bộ sưu tập
│   │   └── ...
│   ├── (shop)/
│   │   ├── layout.tsx              # Layout cho phần mua sắm
│   │   ├── products/
│   │   │   ├── page.tsx            # Danh sách sản phẩm với filter
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Chi tiết sản phẩm
│   │   ├── cart/
│   │   │   └── page.tsx            # Giỏ hàng
│   │   ├── checkout/
│   │   │   └── page.tsx            # Quy trình thanh toán (3 bước)
│   │   └── ...
│   ├── (account)/
│   │   ├── layout.tsx              # Layout cho tài khoản
│   │   ├── profile/
│   │   │   └── page.tsx            # Thông tin cá nhân
│   │   ├── orders/
│   │   │   └── page.tsx            # Lịch sử đơn hàng
│   │   └── ...
│   ├── api/
│   │   ├── checkout/
│   │   │   └── route.ts            # API checkout
│   │   └── products/
│   │       └── route.ts            # API products
│   ├── globals.css                 # Tailwind CSS global
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # OLD - sẽ được thay thế bởi (marketing)
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx              # Button component
│   │   ├── Input.tsx               # Input component
│   │   ├── Card.tsx                # Card wrapper
│   │   ├── Skeleton.tsx            # Loading skeleton
│   │   ├── Pagination.tsx          # Pagination component
│   │   ├── Breadcrumb.tsx          # Breadcrumb navigation
│   │   └── Sort.tsx                # Sort dropdown
│   ├── layout/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Footer.tsx              # Footer
│   │   ├── MainLayout.tsx          # Main layout wrapper
│   │   └── Search.tsx              # Search bar
│   ├── product/
│   │   ├── ProductCard.tsx         # Product card component
│   │   ├── AddToCart.tsx           # Add to cart widget
│   │   ├── ImageGallery.tsx        # Product image gallery
│   │   ├── Rating.tsx              # Rating display
│   │   ├── FilterGroup.tsx         # Filter checkbox group
│   │   └── WishlistButton.tsx      # Wishlist button
│   └── collection/
│       ├── CollectionHero.tsx      # Collection banner hero
│       └── ...
│
├── features/
│   ├── product/
│   │   └── index.ts                # Product utilities & helpers
│   ├── cart/
│   │   └── index.ts                # Cart calculations & logic
│   ├── collection/
│   │   └── index.ts                # Collection fetchers
│   └── auth/
│       └── index.ts                # Auth validation helpers
│
├── hooks/
│   ├── useCart.ts                  # Cart hook (client-side)
│   ├── useFilters.ts               # Filter state management
│   └── useLocalStorage.ts          # Local storage hook
│
├── stores/
│   ├── cart.ts                     # Zustand cart store (persistent)
│   ├── auth.ts                     # Zustand auth store
│   ├── wishlist.ts                 # Zustand wishlist store
│   └── search.ts                   # Zustand search store
│
├── types/
│   └── index.ts                    # All TypeScript types & interfaces
│
├── lib/
│   ├── api.ts                      # Fetch API client & endpoints
│   ├── utils.ts                    # Utility functions
│   └── constants.ts                # App constants
│
├── public/
│   └── ...                         # Static assets
│
├── .env.local.example              # Environment variables template
├── .env.example                    # Git ignore template
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
├── postcss.config.mjs
├── eslint.config.mjs
├── PROJECT.md                      # Project documentation
├── ARCHITECTURE.md                 # THIS FILE - Architecture overview
└── ...
```

## Key Files & Folders

### Route Groups (Marketing vs Shop)
- `(marketing)/` - Trang chủ, bộ sưu tập, blog, liên hệ
- `(shop)/` - Sản phẩm, giỏ hàng, thanh toán, tài khoản
- Sử dụng `()` để không hiển thị trong URL

### Components Organization
- `ui/` - Base components (Button, Input, Card) - reusable
- `layout/` - Global layout (Header, Footer)
- `product/` - Product-specific (ProductCard, AddToCart, Gallery)
- `collection/` - Collection-specific

### State Management (Zustand)
- `stores/cart.ts` - Shopping cart (persistent)
- `stores/auth.ts` - User auth state
- `stores/wishlist.ts` - Wishlist
- `stores/search.ts` - Recent searches

### API & Data
- `lib/api.ts` - Fetch wrapper & API endpoints
- `app/api/` - Route Handlers (BFF for .NET backend)
- `types/index.ts` - Centralized types

## Data Flow

```
Component (Client)
    ↓
useCart/useAuth Hook (Client)
    ↓
Zustand Store (Persistent)
    ↓
API Client (lib/api.ts) or Route Handler (app/api/)
    ↓
.NET Backend (via proxy in Route Handler)
```

## Styling Approach

- **Tailwind CSS** - Utility-first CSS
- **No CSS Modules** - Inline Tailwind classes
- **Responsive** - Mobile-first, md: breakpoint
- `globals.css` - Global styles & Tailwind directives

## Performance Optimizations

- **Next.js Image** - Image optimization
- **Route Groups** - Logical URL structure
- **Server Components** - Default (pages)
- **Client Components** - Only interactive sections (`'use client'`)
- **Zustand Persistence** - Cart in localStorage
- **API Caching** - next: { tags } for revalidation

## Development Workflow

1. **Pages** - Create in `app/(group)/` with route groups
2. **Components** - Create in `components/` organized by feature
3. **Types** - Add to `types/index.ts`
4. **Stores** - Add to `stores/` using Zustand
5. **API** - Add endpoints to `lib/api.ts` or create Route Handler
6. **Features** - Add logic/helpers to `features/`

## Browser Compatibility

- Modern browsers (Chrome, Safari, Firefox, Edge)
- Mobile-friendly (responsive design)
- LocalStorage support required for cart persistence

## Environment Setup

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Build & Deployment

- `npm run build` - Production build
- `npm start` - Start production server
- `npm run dev` - Development server
- `npm run lint` - ESLint check

---

**Lưu ý**: Project này tuân theo Feature-Sliced Design, có nghĩa là mỗi feature có một folder riêng trong `features/`. Code được viết tự nhiên, không có comment máy móc.
