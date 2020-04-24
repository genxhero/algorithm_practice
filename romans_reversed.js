const romanToInteger = roman => {

    let result = 0;
    for (let i=0; i < roman.length; i++) {
        let current = roman[i]
        let prev = roman[i-1]
        let next = roman[i+1]
        switch (current) {
            case "M": {
                prev === "C" ? result += 900 : result += 1000
                break;
            }
            case "D": {
                prev === "C" ? result += 400 : result += 500
                break;
            }
            case "C": {
                result += handleC(prev, next );
                break;
            }
            case "L": {
                prev === "X" ? result += 40 : result += 50
                break;
            }
            case "X": {
                result += handleX(prev, next);
                break;
            }
            case "V": {
               prev === "I" ? result += 4 : result += 5
               break;
            }
            case "I": {
                (next === "V" || next === "X") ? result += 0 : result += 1
                break;
            }
        }
    }
    return result;
}

const handleX = (prev, next) => {
    if (prev === "I") {
        return  9
    } else if (next === "C" || next === "L") {
        return 0
    } else {
        return 10
    }
}

const handleC = (prev, next) => {
    if (next === "M" || next === "D") {
        return 0
    } else if (prev === "X") {
        return 90
    } else {
        return 100
    }
}

 console.log(romanToInteger("MM"))
 console.log(romanToInteger("MCMLXXXV")) //1985
 console.log(romanToInteger("MCMLXXXIV"))  //1984
console.log(romanToInteger("MCMXCV")) //1995
console.log(romanToInteger("MCDLXXVI")) //1476
console.log(romanToInteger("MMMXLV")) //Should be 3045, is 3055