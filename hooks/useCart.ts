import { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/cart';

export function useCart() {
  const [mounted, setMounted] = useState(false);
  const cartStore = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return {
      items: [],
      total: 0,
      itemCount: 0,
      addItem: () => {},
      removeItem: () => {},
      updateQuantity: () => {},
      clear: () => {},
    };
  }

  return {
    items: cartStore.cart.items,
    total: cartStore.cart.total,
    itemCount: cartStore.cart.items.reduce((sum, item) => sum + item.quantity, 0),
    addItem: cartStore.addItem,
    removeItem: cartStore.removeItem,
    updateQuantity: cartStore.updateQuantity,
    clear: cartStore.clear,
  };
}
