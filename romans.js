
/**
 * Inspired by a recent interview I had, this is the JavaScript version of my ruby solution.
 * I also added functionality for bigger numbers.
 */

const superRomanize = (integer) => {
    if (integer <= 3999){
        return romanize(integer)
    } else {
        return `MMMCMXCIX times ${parseInt(integer / 3999)} plus ${romanize(integer % 3999)}`
    }
}

const romanize = (integer) => {
    let result = "";
    const digits = `${integer}`.split("").map(digit => parseInt(digit));
    const length = digits.length;
    if (length === 0) {
        return ""
    }  
    
    if (length === 4) {
        result += parse_thousands(digits[0]);
    }  
    
    if (length >= 3) {
        result += parse_hundreds(digits[length-3]);
    }

    if (length >= 2) {
        result += parse_tens(digits[length-2]);
    }

    if (length >= 1) {
        result += parse_ones(digits[length-1]);
    }

    return result;
}

const parse_ones = (integer) => {
    const hash = {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8:"VIII", 9: "IX"}
    return hash[integer]
}

const parse_tens = (integer) => {
    const hash = { 0: "", 1: "X", 2: "XX", 3: "XXX", 4: "XL", 5: "L", 6: "LX", 7: "LXX", 8: "LXXX", 9: "XC" }
    return hash[integer]
}

const parse_hundreds = (integer) => {
    hash = { 0: "", 1: "C", 2: "CC", 3: "CCC", 4: "CD", 5: "D", 6: "DC", 7: "DCC", 8: "DCCC", 9: "CM" }
    return hash[integer]
}

const parse_thousands = (integer) => {
    hash = { 0: "", 1: "M", 2: "MM", 3: "MMM" }
    return hash[integer]
}

console.log(romanize(999))
console.log(superRomanize(4000))
console.log(superRomanize(4244))