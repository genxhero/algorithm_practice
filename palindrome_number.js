const isPalindrome = (x) => {
    const chars = `${x}`.split("").join("");
    const reverse = `${x}`.split("").reverse().join("");
    return chars === reverse;
}