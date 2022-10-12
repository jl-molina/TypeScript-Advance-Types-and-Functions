import { faker } from '@faker-js/faker';
import { products, addProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        price: parseInt(faker.commerce.price()),
        tags: faker.helpers.arrayElements(),
        isNew: faker.datatype.boolean(),
        size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({min: 10, max: 20}),
        // size: 'M'
        categoryId: faker.datatype.uuid()
    });
}

console.log(products);