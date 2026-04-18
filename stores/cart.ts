import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Cart, CartItem } from '@/types';

interface CartStore {
  cart: Cart;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, sizeId: string) => void;
  updateQuantity: (productId: string, sizeId: string, quantity: number) => void;
  clear: () => void;
  calculateTotals: () => void;
}

const initialCart: Cart = {
  items: [],
  total: 0,
  tax: 0,
  shipping: 0,
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: initialCart,

      addItem: (item) => {
        set((state) => {
          const existingItem = state.cart.items.find(
            (i) => i.productId === item.productId && i.sizeId === item.sizeId
          );

          if (existingItem) {
            existingItem.quantity += item.quantity;
          } else {
            state.cart.items.push(item);
          }

          get().calculateTotals();
          return { cart: { ...state.cart } };
        });
      },

      removeItem: (productId, sizeId) => {
        set((state) => {
          state.cart.items = state.cart.items.filter(
            (i) => !(i.productId === productId && i.sizeId === sizeId)
          );
          get().calculateTotals();
          return { cart: { ...state.cart } };
        });
      },

      updateQuantity: (productId, sizeId, quantity) => {
        set((state) => {
          const item = state.cart.items.find(
            (i) => i.productId === productId && i.sizeId === sizeId
          );
          if (item) {
            item.quantity = Math.max(1, quantity);
          }
          get().calculateTotals();
          return { cart: { ...state.cart } };
        });
      },

      clear: () => {
        set({ cart: initialCart });
      },

      calculateTotals: () => {
        set((state) => {
          const subtotal = state.cart.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          const tax = Math.round(subtotal * 0.1);
          const shipping = subtotal > 500000 ? 0 : 30000;
          state.cart.total = subtotal + tax + shipping;
          state.cart.tax = tax;
          state.cart.shipping = shipping;
          return { cart: { ...state.cart } };
        });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
