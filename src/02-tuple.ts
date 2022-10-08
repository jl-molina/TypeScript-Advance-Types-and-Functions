const prices: (number | string)[] = [1,2,3,4,5,'6'];

let user: [string, number, boolean];

user = ['joseluis', 10, true];
user = ['joseluis', 20, false];

const [ username, age] = user;

console.log(username);
console.log(age);