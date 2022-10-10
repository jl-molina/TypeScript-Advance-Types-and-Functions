let unknownVar: unknown;

unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();
if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase();
}    

const parse = (str: string): unknown => {
    return JSON.parse(str);
}

if (typeof unknownVar === 'boolean') {
    let isNew: boolean = unknownVar;
    console.log(isNew);
}