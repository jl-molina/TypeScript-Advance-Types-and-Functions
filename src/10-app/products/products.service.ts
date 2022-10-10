import { Product } from './products.model';

const products: Product[] = [];

export const addProduct = (data: Product) => {
    products.push(data);
}