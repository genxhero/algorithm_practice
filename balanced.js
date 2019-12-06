const isBalanced = (string) => {
    const openers = {"(": ")", "[": "]", "{":"}"};
    const closers = {")": "(", "]": "[", "}": "{"};
    if (closers[string[0]]) {
        return false;
    }
}