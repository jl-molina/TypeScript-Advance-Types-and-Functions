import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
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

const updateProduct = (id: string | number, changes: UpdateProductDto): Product => {
    // code
    const index = products.findIndex(i => i.id === id);
    const prevData = products[index];
    products[index] = {
        ...prevData,
        ...changes
    }

    return products[index];
}

const getProduct = (id: string, changes: Product) => {
    // code
}

const deleteProduct = (id: string, changes: Product) => {
    // code
}

const findProducts = (dto: FindProductDto): Product[] => {
    return products;
}

export { products, addProduct, updateProduct, getProduct, deleteProduct, findProducts }