import { ProductCard } from '@/entities/product';
import { fetchData } from '@/shared/api/fetcher';
import { Product } from '@/shared/types';

export default async function Home() {
  const products = await fetchData<Product[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    {
      cache: 'force-cache',
    },
  );
  return (
    <section className="container mx-auto mt-4 px-2">
      <h2 className="mb-5 text-2xl font-semibold">Товари</h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {products?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          );
        })}
      </ul>
    </section>
  );
}
