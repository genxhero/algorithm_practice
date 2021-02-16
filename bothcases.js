const bothCases = (string) => {
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

console.log("AbBa has both for all(expect true): ", bothCases("AbBa"))
console.log("AbBaC only has C be uppercase (expect false): ", bothCases("AbBaC"))