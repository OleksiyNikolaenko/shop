export interface IProduct {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;

    category: ICategory;

    images: string[];

    creationAt: string;
    updatedAt: string;
}

export interface ICategory {
    id: number;
    name: string;
    image: string;
    slug: string;
    creationAt: string;
    updatedAt: string;
}
