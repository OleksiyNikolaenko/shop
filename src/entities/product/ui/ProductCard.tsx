import { Card } from '@/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCardProps } from '../model/ProductCard.props';
import { AddToCardButton } from './AddToCardButton';

export const ProductCard = (props: Readonly<ProductCardProps>) => {
  const { id, title, description, price, image } = props;
  return (
    <li className="h-[405px] w-2/5 rounded-sm border-1 p-1 md:w-[225px]">
      <Card>
        <Link href={`product/${id}`}>
          <div>
            <Image
              className="h-24 w-40 sm:h-[220px] sm:w-full"
              src={image}
              alt={title}
              width={100}
              height={100}
            />
          </div>

          <h3 className="mb-2 line-clamp-1 font-semibold">{title}</h3>
          <p className="mb-2 line-clamp-3 text-pretty">{description}</p>

          <div className="">
            <span className="flex justify-end font-bold text-neutral-600">
              {price} $
            </span>
          </div>
        </Link>
        <AddToCardButton product={props} />
      </Card>
    </li>
  );
};
