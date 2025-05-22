'use client';

import { useCartStore } from '@/store';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { Product } from '@/types';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';

export const ProductItem = ({
  id,
  image,
  title,
  description,
  price,
}: Product) => {
  const { addItemToCart } = useCartStore();
  const { addItemToFavorite } = useFavoritesStore();

  return (
    <li
      className="transition-color relative h-[250px] w-[225px] rounded-md border-1 border-black/50 p-1 duration-300 ease-in-out hover:border-black/100 sm:h-[440px]"
      key={id}>
      <Link className="" href={`/product/${id}`}>
        <div className="flex justify-center">
          <Image
            className="h-[100px] w-[100px] sm:h-[250px] sm:w-[300px]"
            src={image}
            alt={title}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h3 className="my-2 line-clamp-1 font-semibold">{title}</h3>
          <p className="line-clamp-3 text-base">{description}</p>
        </div>
        <span className="text-xl font-semibold">{price} $</span>
      </Link>
      <div className="mt-2 hidden sm:flex sm:items-center sm:justify-center">
        <Button
          className="w-full rounded-sm bg-blue-500 p-1 text-white transition-colors duration-300 ease-in-out hover:bg-blue-400"
          onClick={() =>
            addItemToCart({
              title,
              description,
              id,
              image,
              price,
            })
          }>
          Add to card
        </Button>
      </div>
      <Button
        onClick={() =>
          addItemToFavorite({ title, description, id, image, price })
        }
        className="hidden transition-colors duration-300 ease-in-out hover:text-red-500 sm:absolute sm:top-2 sm:left-2 sm:block">
        <Star />
      </Button>
    </li>
  );
};
