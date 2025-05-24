import { Product } from '@/shared/types';
import { Button } from '@/shared/ui';
import { Card } from '@/shared/ui/Card';

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

export default async function Home() {
  const products = await getProducts();
  return (
    <section className="container mx-auto mt-4 px-2">
      {/* <ul className="flex flex-row flex-wrap items-center justify-center gap-2 lg:gap-3">
        {products?.map((product) => {
          return (
           
          );
        })}
      </ul> */}

      <Card>
        <Button>В кошик</Button>
      </Card>
    </section>
  );
}
