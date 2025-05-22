import { Product } from '@/types';
import { ProductItem } from '../ProductItem/ProductItem';

async function getProducts(): Promise<Product[] | null> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('failed data fetch');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const ProductList = async () => {
  const products = await getProducts();
  return (
    <ul className="flex flex-row flex-wrap items-center justify-center gap-2 lg:gap-3">
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  );
};
