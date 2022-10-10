import { User } from "./../users/user.model";
import { Product } from "./../products/products.model"

interface Order {
    id: string | number,
    createdAt: Date,
    products: Product[],
    user: User
}