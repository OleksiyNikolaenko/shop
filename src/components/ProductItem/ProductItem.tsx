'use client';

import { useCartStore } from '@/store';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const ProductItem = ({
  id,
  image,
  title,
  description,
  price,
}: Product) => {
  const { addItemToStore } = useCartStore();

  return (
    <li
      className="transition-color h-[250px] w-[200px] rounded-md border-1 border-black/50 p-1 duration-300 ease-in-out hover:border-black/100 sm:h-[440px]"
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
        <button
          onClick={() =>
            addItemToStore({
              title,
              description,
              id,
              image,
              price,
            })
          }
          className="w-full rounded-sm bg-blue-500 p-1 text-white transition-colors duration-300 ease-in-out hover:bg-blue-400">
          Add to card
        </button>
      </div>
    </li>
  );
};
