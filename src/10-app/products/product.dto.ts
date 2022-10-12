import { Product } from './product.model';

interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt'  | 'category'> {
    categoryId: string    
}

interface UpdateProductDto extends Partial<CreateProductDto> {

}

interface FindProductDto extends Readonly<Partial<Product>> {

}

type example = Pick<Product, 'color' | 'description'>;

type example2 = Required<Product>;

export { CreateProductDto, UpdateProductDto, FindProductDto }