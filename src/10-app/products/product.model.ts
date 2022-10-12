import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
    title: string,
    image: string,
    description: string,
    stock: number,
    size?: Sizes,
    color: string,
    price: number,
    category: Category,
    isNew: boolean,
    tags: string[]
}

export { Sizes, Product }