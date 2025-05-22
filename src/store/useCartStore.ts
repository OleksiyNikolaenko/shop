import { Product } from '@/types';
import { create } from 'zustand';

interface CartProduct extends Product {
  cartCounter: number;
}

interface CartStore {
  cartProducts: CartProduct[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productId: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartProducts: [],
  addItemToCart: (product) =>
    set((state) => {
      const isExist = state.cartProducts.find((p) => p.id === product.id);

      if (isExist) {
        return {
          cartProducts: state.cartProducts.map((p) =>
            p.id === product.id ? { ...p, cartCounter: p.cartCounter + 1 } : p,
          ),
        };
      }

      const newCartProduct: CartProduct = {
        ...product,
        cartCounter: 1,
      };

      return {
        cartProducts: [newCartProduct, ...state.cartProducts],
      };
    }),
  removeItemFromCart: (id) =>
    set((state) => ({
      cartProducts: state.cartProducts.filter((p) => p.id !== id),
    })),
}));
