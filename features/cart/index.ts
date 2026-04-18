import { Cart } from '@/types';

export function calculateCartTotal(cart: Cart): void {
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.1);
  const shipping = subtotal > 500000 ? 0 : 30000;
  
  cart.total = subtotal + tax + shipping;
  cart.tax = tax;
  cart.shipping = shipping;
}

export function getCartItemCount(cart: Cart): number {
  return cart.items.reduce((sum, item) => sum + item.quantity, 0);
}
