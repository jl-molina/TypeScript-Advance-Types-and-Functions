export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join('');
    } else if (typeof input === 'string'){
        return [...input];
    } else if (typeof input === 'number') {
        return true;
    }
}

console.log(parseStr('hello'));
console.log(parseStr(['h','e','l','l','o']));
console.log(parseStr(1));