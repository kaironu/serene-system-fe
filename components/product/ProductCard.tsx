'use client';

import { Product } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';
import { WishlistButton } from './WishlistButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        className="group overflow-hidden rounded-lg"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="relative bg-secondary aspect-square overflow-hidden rounded-lg mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Wishlist Button */}
          <div
            className="absolute top-4 right-4 z-10"
            onClick={(e) => e.preventDefault()}
          >
            <WishlistButton productId={product.id} />
          </div>

          {/* Sale Badge */}
          {product.originalPrice && (
            <motion.div
              className="absolute top-4 left-4 bg-accent-brick text-white px-3 py-1 rounded-full text-xs font-semibold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-lg leading-snug line-clamp-2 text-text-primary mb-3 group-hover:text-accent-brick transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-serif text-2xl text-accent-brick font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-text-tertiary line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.rating && (
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(product.rating!) ? 'text-accent-gold' : 'text-neutral-light'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-text-tertiary ml-2">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </Link>
  );
}
