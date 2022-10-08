function parseStr(input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('');
    } else {
        return [...input];
    }
}

console.log(parseStr('hello'));
console.log(parseStr(['h','e','l','l','o']));