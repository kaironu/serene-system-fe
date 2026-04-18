# Design System - Serene System 2026

Một design system hiện đại, thanh lịch cho Serene System - cửa hàng bán áo dài truyền thống với thiết kế hiện đại.

## 🎨 Phong Cách: Elegant Minimalism + Vietnamese Heritage

### Triết Lý Thiết Kế

- **Minimalism**: Không phô bày, để vẻ đẹp tự tỏa sáng
- **Vietnamese Heritage**: Tôn vinh nét đẹp truyền thống
- **Typography**: Serif headings (Playfair Display) cho sự sang trọng
- **Whitespace**: Khoảng cách thoáng, tính cân bằng
- **Animation**: Subtle, mượt, silk-like (không quá sâu, không dễ gây chóng mặt)

---

## 🎯 Color Palette

### Primary Colors
- **Off-White Primary**: `#faf9f7` - Nền chính, ấm áp
- **Neutral Secondary**: `#f3f1ed` - Background phụ
- **Neutral Tertiary**: `#ede9e3` - Hover, subtle backgrounds

### Text Colors
- **Text Primary**: `#1a1a1a` - Heading, body text chính
- **Text Secondary**: `#4a4a4a` - Phụ text, descriptions
- **Text Tertiary**: `#7a7a7a` - Labels, captions
- **Text Light**: `#b0b0b0` - Disabled, very subtle

### Accent Colors (Vietnamese Heritage)
- **Gold**: `#d4af37` - Luxury, elegant accents
- **Brick Red**: `#a23b3b` - Traditional, warm accent
- **Jade Green**: `#4a7c6a` - Sophisticated, balance
- **Black**: `#0a0a0a` - Strong, premium

### Semantic Colors
- **Success**: `#2d6a4f` - Positive actions
- **Warning**: `#c9812d` - Caution
- **Error**: `#d62828` - Errors, alerts
- **Border**: `#e0dbd3` - Subtle dividers

---

## 📝 Typography

### Font Families

1. **Playfair Display** (Serif)
   - Use: H1, H2, H3, H4, headings
   - Weight: 400, 500, 600, 700
   - Style: Elegant, traditional, premium
   ```tsx
   <h1 className="font-serif text-6xl font-normal">Serene System</h1>
   ```

2. **Inter** (Sans-serif)
   - Use: Body text, UI, buttons, labels
   - Weight: 400, 500, 600, 700
   - Style: Modern, readable, clean
   ```tsx
   <p className="font-sans text-base">Description text</p>
   ```

### Heading Sizes

| Level | Size | Class | Usage |
|-------|------|-------|-------|
| H1 | 48/60/80px | `text-5xl md:text-6xl lg:text-7xl` | Page titles, hero |
| H2 | 36/48/64px | `text-4xl md:text-5xl lg:text-6xl` | Section titles |
| H3 | 28/36/48px | `text-3xl md:text-4xl` | Subsections |
| H4 | 24/28/36px | `text-2xl md:text-3xl` | Card titles |
| H5 | 20/24/28px | `text-xl md:text-2xl` | Sub-headings |
| H6 | 14/16/18px | `text-sm font-semibold` | Labels, tags |

### Body Text

- **Base**: `text-base leading-relaxed` - 16px, relaxed line height
- **Small**: `text-sm` - 14px, supporting text
- **Large**: `text-lg` - 18px, emphasized text

---

## 🎭 Component Library

### Button Variants

```tsx
import { Button } from '@/components/ui/Button'

// Primary (Black)
<Button variant="primary">Primary</Button>

// Secondary (Light Background)
<Button variant="secondary">Secondary</Button>

// Outline
<Button variant="outline">Outline</Button>

// Ghost (Transparent)
<Button variant="ghost">Ghost</Button>

// Accent (Brick Red)
<Button variant="accent">Accent</Button>

// Subtle
<Button variant="subtle">Subtle</Button>
```

### Button Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Cards

```tsx
import { Card } from '@/components/ui/Card'

<Card variant="default">Default Card</Card>
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
```

### Input

```tsx
import { Input } from '@/components/ui/Input'

<Input
  type="text"
  placeholder="Enter text..."
/>
```

### Tags & Badges

```tsx
import { Tag } from '@/components/ui/Tag'
import { Badge } from '@/components/ui/Badge'

<Tag variant="default">Default</Tag>
<Tag variant="accent">Accent</Tag>
<Tag variant="gold">Gold</Tag>
<Tag variant="brick">Brick</Tag>

<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

---

## 🎬 Animations & Motion

### Framer Motion Variants

Sử dụng các motion variants từ `lib/design-system.ts`:

```tsx
import { AnimatedSection } from '@/lib/motion'

// Fade in + slide up on scroll
<AnimatedSection variant="fadeInUp">
  Content here
</AnimatedSection>

// Scale in
<AnimatedSection variant="scaleIn">
  Content here
</AnimatedSection>

// Slide from left
<AnimatedSection variant="slideInLeft">
  Content here
</AnimatedSection>
```

### Hover Effects

```tsx
import { motion } from 'framer-motion'

// Lift on hover
<motion.div whileHover={{ y: -4, boxShadow: '...' }}>
  Lift me
</motion.div>

// Scale on hover
<motion.div whileHover={{ scale: 1.02 }}>
  Scale me
</motion.div>

// Smooth transition
<motion.div
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  Smooth
</motion.div>
```

### Animation Durations

- **Fast**: 200ms - Quick feedback
- **Base**: 300ms - Standard transitions
- **Slow**: 500ms - Entrance animations
- **Slower**: 800ms - Page transitions

---

## 📐 Spacing System

```
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 2.5rem (40px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Usage

```tsx
<div className="p-lg">Padding large</div>
<div className="gap-md">Gap medium</div>
<div className="mb-xl">Margin bottom extra large</div>
```

---

## 🌓 Dark Mode Support

Design system hỗ trợ dark mode tự động. Colors sẽ tự điều chỉnh dựa trên `prefers-color-scheme`.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f0f0e;
    --text-primary: #f5f5f3;
    /* ... */
  }
}
```

---

## 🎯 Layout Patterns

### Hero Section

```tsx
import Hero from '@/components/layout/Hero'

<Hero
  title="Serene System"
  subtitle="Áo dài - Nét đẹp truyền thống"
  description="Khám phá bộ sưu tập..."
  image="/hero.jpg"
  cta={{ text: 'Shop Now', href: '/products' }}
/>
```

### Section with Title

```tsx
import Section from '@/components/layout/Section'

<Section title="Featured Products" subtitle="New arrivals">
  <div className="grid md:grid-cols-4 gap-8">
    {/* Products */}
  </div>
</Section>
```

### Container

```tsx
import { Container } from '@/components/ui/Container'

<Container size="md">
  Content with max-width
</Container>
```

---

## 🔍 Accessibility

- **Focus states**: Visible, colored borders
- **Color contrast**: WCAG AA compliant
- **Semantic HTML**: Proper heading hierarchy
- **Alt text**: All images have descriptive alt text
- **Keyboard navigation**: All interactive elements are keyboard accessible

---

## 📱 Responsive Design

Breakpoints sử dụng Tailwind CSS defaults:

| Size | Breakpoint | Class Prefix |
|------|-----------|--------------|
| Mobile | Default | - |
| Tablet | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Large | 1280px | `xl:` |

### Mobile First

```tsx
// Vừa cho mobile, md:large cho tablet+
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  Grid items
</div>
```

---

## 💡 Best Practices

1. **Use CSS Variables**: Sử dụng `text-text-primary` thay vì `text-gray-800`
2. **Semantic Colors**: Sử dụng `accent-brick` thay vì hardcode colors
3. **Animations**: Tránh animate quá nhiều, focus vào subtle transitions
4. **Typography**: Giữ font consistency - serif cho headings, sans cho body
5. **Whitespace**: Don't be afraid of empty space, nó giúp content breathe
6. **Contrast**: Đủ mạnh để readable, không quá harsh

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Playfair Display Font](https://fonts.google.com/specimen/Playfair+Display)
- [Inter Font](https://fonts.google.com/specimen/Inter)

---

**Designed with elegance and Vietnamese heritage in mind. ✨**
