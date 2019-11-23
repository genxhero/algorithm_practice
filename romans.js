
const romanize = (integer) => {
    let result = "";
    const digits = `${integer}`.split("").map(digit => parseInt(digit))
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