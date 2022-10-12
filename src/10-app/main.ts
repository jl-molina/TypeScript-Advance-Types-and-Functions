import { faker } from '@faker-js/faker';
import { products, addProduct, updateProduct, findProducts } from './products/product.service';

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

const product = products[0];

updateProduct(product.id, {
    title: 'New Title',
    stock: 15
})

findProducts({
    stock: 10,
    color: 'red',
    createdAt: new Date(),
    tags: ['tag1','tag2']
})

console.log(products);