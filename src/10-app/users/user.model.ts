import { BaseModel } from "../base.model";

enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

interface User extends BaseModel {
    username: string,
    roles: ROLES
}

export { ROLES, User }