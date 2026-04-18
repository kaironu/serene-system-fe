'use client';

import Link from 'next/link';
import { useWishlistStore } from '@/stores/wishlist';

interface WishlistButtonProps {
  productId: string;
}

export function WishlistButton({ productId }: WishlistButtonProps) {
  const { isInWishlist, addItem, removeItem } = useWishlistStore();
  const inWishlist = isInWishlist(productId);

  const handleClick = () => {
    if (inWishlist) {
      removeItem(productId);
    } else {
      addItem(productId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
        inWishlist
          ? 'bg-red-500 text-white'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
    >
      ♥
    </button>
  );
}
