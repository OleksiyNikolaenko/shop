import { ProductCard } from "@/src/entity/product";
import { IProduct } from "@/src/entity/product/model/types/product.type";

async function getProducts(): Promise<IProduct[] | null> {
    try {
        const res = await fetch(
            `${process.env.API_URL}/products?offset=0&limit=21`,
        );

        if (!res.ok) throw new Error("failed data fetch");

        const data = await res.json();

        return data;
    } catch (error) {
        if (error instanceof Error) console.log(error);

        return null;
    }
}

export const HomePage = async () => {
    const products = await getProducts();

    return (
        <section className="container mx-auto mt-5 p-1">
            <h1 className="mb-5 text-xl font-semibold text-neutral-700">
                Products
            </h1>
            <ul className="flex flex-wrap gap-2">
                {products?.map((p) => (
                    <li key={p.id}>
                        <ProductCard
                            id={p.id}
                            title={p.title}
                            price={p.price}
                            image={p.images[0]}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
