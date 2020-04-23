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
                if (next === "M") {
                    console.log("Next is M, adding nothing.")
                    result += 0
                    break;
                } else if(prev === "X")  {
                    console.log("Prev was x, adding 90")
                        result += 90
                        break;
                    } else {
                        console.log("neither x nor m involved, adding 100")
                        result += 100
                        break;
                }
            }

            case "L": {
                prev === "X" ? result += 40 : result += 50
                break;
            }

            case "X": {
                if (prev === "I" ) {
                    result += 9
                    break;
                } else if (next === "C") {
                    result += 0
                    break;
                } else {
                    result += 10
                    break;
                }
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

// console.log(romanToInteger("MM"))
// console.log(romanToInteger("MCMLXXXV")) //1985
// console.log(romanToInteger("MCMLXXXIV"))  //1984
console.log(romanToInteger("MCMXCV")) //should be 1995 but because of the case with C it won't work.