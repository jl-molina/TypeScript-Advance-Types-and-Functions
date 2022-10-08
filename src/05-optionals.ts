export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number
    ) => {
        return {
            id,
            stock: stock ?? 10,
            isNew: isNew ?? true
        }
}

const p1 = createProduct(1, false, 0);
const p2 = createProduct(2);

console.log(p1);
console.log(p2);