const romanToInteger = roman => {
    const numeralHash = {
        "M": 1000,
        "V": 5,
        "I": 1,
        "X": 10,
        "D": 500,
        "L": 50,
        "C": 100
    }
    let result = 0;
    for (let i=0; i < roman.length; i++) {
        result += numeralHash[roman[i]]
    }
    return result;
}

console.log(romanToInteger("MM"))
console.log("MCMLXXV") //should be 1985, it's gonna not be because the code above is wrong.