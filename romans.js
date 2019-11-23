
/**
 * Inspired by a recent interview I had, this is the JavaScript version of my ruby solution.
 * TODO: Add an even higher function that checks whether a number is greater than 3,999.  If it is, 
 * Return "max string * (number / 3999)" and call romanize on the remainder.  If % 3999 === 0, tack on ""
 * otherwise, "+ romanize(number % 3999)"
 */

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

    if (length >= 2) {
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
    hash[integer]
}

const parse_thousands = (integer) => {

}

console.log(romanize(999))