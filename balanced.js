const isBalanced = (string) => {
    const openers = {"(": ")", "[": "]", "{":"}"};
    const closers = {")": "(", "]": "[", "}": "{"};
    if (closers[string[0]]) {
        return false;
    }

    let stack = [];
    for (let i = 0; i < string.length; i++) {
        if(openers[string[i]]) {
            stack.push(string[i])
        }

        if ()
    }
}