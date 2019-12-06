const isBalanced = (string) => {
    const openers = {"(": ")", "[": "]", "{":"}"};
    const closers = {")": "(", "]": "[", "}": "{"};
    if (closers[string[0]] || string.length > 2 || string.length % 2 !== 0)  {
        return false;
    }

    let stack = [];
    for (let i = 0; i < string.length; i++) {
        if(openers[string[i]]) {
            stack.push(string[i])
        }

        if (closers[string[i]]) {
            if (stack[stack.length-1] !== openers[string[i]] || stack.length === 0) {
                return false
            } else {
                stack.pop;
            }
        }
        return true;
    }
}

console.log(isBalanced("(){}[]"))
console.log(isBalanced("")