const withoudEnd = () => {
    while (true) {
        console.log('never stop learning');
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return "it's a string";
    } else if (Array.isArray(input)) {
        return "it's an array";
    }
    return fail("didn't match");
}

console.log(example('hello'));
console.log(example([1,3,5,0,'23']));
console.log(example(1));
console.log(example('bye'));