import { addProduct } from './products/products.service';

addProduct({
    id: 1,
    title: 'p1',
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 10,
    size: 'M',
    category: {
        id: 'producto 2',
        createdAt: new Date(),
        updatedAt:  new Date(),
        name: 'chair'
    }
});