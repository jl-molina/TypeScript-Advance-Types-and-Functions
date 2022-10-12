import { Product } from './product.model';
import { CreateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

const products: Product[] = [];

const addProduct = (data: CreateProductDto) => {
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
    }
    products.push(newProduct);

    return newProduct;
}

const updateProduct = (id: string, changes: Product) => {
    // code
}

const getProduct = (id: string, changes: Product) => {
    // code
}

const deleteProduct = (id: string, changes: Product) => {
    // code
}

export { products, addProduct, updateProduct, getProduct, deleteProduct }