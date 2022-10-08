export const createProduct = (
    id: string | number,
    isNew: boolean = true,
    stock: number = 10
    ) => {
        return {
            id,
            stock: stock,
            isNew: isNew
        }
}

const p1 = createProduct(1, false, 0);
const p2 = createProduct(2);

console.log(p1);
console.log(p2);