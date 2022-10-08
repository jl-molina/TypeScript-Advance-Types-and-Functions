enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
};

type User = {
    username: string,
    role: ROLES
}

const joseUser: User = {
    username: 'joseluis', 
    role: ROLES.ADMIN
};