import { Product } from '@/shared/types';

async function getCartProducts(): Promise<Product[] | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
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

export default async function Cart() {
	const cart = await  getCartProducts()
	console.log(cart)
  return <section>

	</section>;
}
