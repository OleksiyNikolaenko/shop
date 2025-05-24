'use client';

import { Button } from '@/shared/ui';
import { ProductCardProps } from '../model/ProductCard.props';

export const AddToCardButton = (product: { product: ProductCardProps }) => {
  const sendProductToCart = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
        method: 'POST',
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed post');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button onClick={() => sendProductToCart()} className="mt-2 w-full">
      В кошик
    </Button>
  );
};
