const isValidBracketsSol1 = (str) => {
    if (str.length % 2 !== 0) return false;

    const stack = [];

    for (let i = 0; i < str.length; i += 1) {
        const top = stack[stack.length - 1];

        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else if (str[i] === ')' && top === '(' && stack.length !== 0) {
            stack.pop();
        } else if (str[i] === ']' && top === '[' && stack.length !== 0) {
            stack.pop();
        } else if (str[i] === '}' && top === '{' && stack.length !== 0) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

const isValidBracketsSol2 = (str) => {
    if (str.length % 2 !== 0) return false;

    const stack = [];
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);
    for (let i = 0; i < str.length; i += 1) {
        if (map.has(str[i])) {
            stack.push(map.get(str[i]));
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};

const functionName = process.argv[2];
if (functionName === "first_solution") {
    console.log(isValidBracketsSol1('({}){}'));
} else if (functionName === "second_solution") {
    console.log(isValidBracketsSol2('({}){}'));
} else {
    console.log("Invalid function name. Please choose first_solution or second_solution.");
}