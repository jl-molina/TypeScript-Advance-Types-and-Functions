import { User } from "./../users/user.model";
import { Product } from "./../products/products.model"
import { BaseModel } from "../base.model";

interface Order extends BaseModel{
    products: Product[],
    user: User
}