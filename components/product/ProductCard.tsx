'use client';

import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isSoldOut = !product.sizes?.length || product.sizes.every((size) => size.stock <= 0);

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group overflow-hidden">
        <div className="relative bg-secondary aspect-4/5 overflow-hidden mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {isSoldOut && (
            <div className="absolute top-3 left-3 bg-white/90 text-text-primary px-2.5 py-1 text-xs uppercase tracking-wide border border-neutral-light">
              Hết hàng
            </div>
          )}
        </div>

        <div>
          <h3 className="font-serif text-base md:text-lg leading-snug line-clamp-2 text-text-primary mb-2 group-hover:text-accent-jade transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="font-sans text-base md:text-lg text-text-primary font-medium">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-text-tertiary line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
