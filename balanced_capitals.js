const isBalanced = (string) => {
    let hash = {};
    for (let i = 0; i < string.length; i++) {
        hash[string[i]] = true;
    }

    for (let j = 0; j < string.length; j++) {
        if (!hash[string[j].toUpperCase()]  || !hash[string[j].toLowerCase()]) {
            return false;
        }
    }
    return true;
}

console.log("AbBa should be balanced (expect true): ", isBalanced("AbBa"))
console.log("AbBaC should not be balanced (expect false): ", isBalanced("AbBaC"))