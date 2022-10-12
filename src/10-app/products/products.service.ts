import { Product } from './products.model';

const products: Product[] = [];

export const addProduct = (data: Product) => {
    data.updatedAt = new Date();
    products.push(data);
}