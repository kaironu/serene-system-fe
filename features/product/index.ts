import { Product } from '@/types';
import { productAPI } from '@/lib/api';

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    return (await productAPI.getBySlug(slug)) as Product | null;
  } catch (error) {
    return null;
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    return (await productAPI.getAll()) as Product[];
  } catch (error) {
    return [];
  }
}

export function formatProductPrice(price: number): string {
  return price.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

export function getProductDiscount(originalPrice: number, currentPrice: number): number {
  if (!originalPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}
