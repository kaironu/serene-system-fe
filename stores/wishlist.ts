import { create } from 'zustand';

interface WishlistStore {
  items: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  
  addItem: (productId) => {
    set((state) => ({
      items: [...new Set([...state.items, productId])],
    }));
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((id) => id !== productId),
    }));
  },

  isInWishlist: (productId) => {
    return get().items.includes(productId);
  },
}));
