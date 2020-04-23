const romanToInteger = roman => {
    // const numeralHash = {
    //     "M": 1000,
    //     "V": 5,
    //     "I": 1,
    //     "X": 10,
    //     "D": 500,
    //     "L": 50,
    //     "C": 100
    // }

    let result = 0;
    for (let i=0; i < roman.length; i++) {
        let current = roman[i]
        let prev = roman[i-1]
        let next = roman[i+1]
        switch (current) {
            case "M": {
                prev === "C" ? result += 900 : result += 1000
            }

            case "D": {

            }

            case "D": {

            }

            case "C": {
                next === "M" ? result += 0 : result += 100
            }

            case "L": {

            }

            case "X": {

            }

            case "V": {

            }

            case "I": {

            }
        }
    }
    return result;
}

console.log(romanToInteger("MM"))
console.log(romanToInteger("MCMLXXXV")) //should be 1985, it's gonna not be because the code above is wrong.