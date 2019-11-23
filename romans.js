
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

}

const parse_hundreds = (integer) => {

}

const parse_thousands = (integer) => {

}