import { Product } from '@/shared/types';

export type ProductCardProps = Omit<Product, 'category'>;
