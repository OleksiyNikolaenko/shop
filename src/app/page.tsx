import { ProductList } from '@/components';

export default async function Home() {
  return (
    <section className="container mx-auto mt-4 px-2">
      <ProductList />
    </section>
  );
}
