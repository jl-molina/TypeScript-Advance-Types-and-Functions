import { Product } from './products.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
    data.updatedAt = new Date();
    products.push(data);
}

export const updateProduct = (id: string, changes: Product) => {
    // code
}

export const getProduct = (id: string, changes: Product) => {
    // code
}

export const deleteProduct = (id: string, changes: Product) => {
    // code
}