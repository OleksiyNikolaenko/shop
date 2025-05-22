import { Product } from '@/types';
import { create } from 'zustand';

interface CartStore {
  favorites: Product[];
  addItemToFavorite: (product: Product) => void;
  removeItemFromFavorite: (productId: number) => void;
}

export const useFavoritesStore = create<CartStore>((set) => ({
  favorites: [],
  addItemToFavorite: (product) =>
    set((state) => {
      const isExist = state.favorites.find((p) => p.id === product.id);
      if (isExist) return state;
      return { favorites: [...state.favorites, product] };
    }),
  removeItemFromFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((p) => p.id !== id),
    })),
}));
