import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  slug: string;
}

interface SearchStore {
  recentSearches: Product[];
  addRecentSearch: (product: Product) => void;
  clearRecentSearches: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  recentSearches: [],

  addRecentSearch: (product) => {
    set((state) => {
      const filtered = state.recentSearches.filter((p) => p.id !== product.id);
      return {
        recentSearches: [product, ...filtered].slice(0, 5),
      };
    });
  },

  clearRecentSearches: () => {
    set({ recentSearches: [] });
  },
}));
