import { faker } from '@faker-js/faker';
import { products, addProduct } from './products/products.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        id: faker.datatype.uuid(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        price: parseInt(faker.commerce.price()),
        tags: faker.helpers.arrayElements(),
        isNew: faker.datatype.boolean(),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        title: faker.commerce.productName(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        stock: faker.datatype.number({min: 10, max: 20}),
        // size: 'M'
        category: {
            id: faker.datatype.uuid(),
            createdAt: faker.date.recent(),
            updatedAt:  faker.date.recent(),
            name: faker.commerce.department()
        }       
    });
}

console.log(products);