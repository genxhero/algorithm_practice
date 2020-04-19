const readline = require('readline');
const fs = require("fs");

const birthdayCakeCandles = (ar) => {
    let maxCount = 0;
    const sorted = ar.sort( (a, b) =>  a < b );
    const tallest = sorted[0];
    console.log(tallest)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === tallest) {
            maxCount += 1;
        } else {
            console.log("Smaller:", sorted[i])
        }
    }
    return maxCount;
}

const arr = [999];

for (i = 0; i < 99999; i++) {
    arr.push(1000)
}



const otherMethod = (ar) => {
    let maxCount = 0;
    let tallest = ar[0];
    for (let i = 0; i < ar.length; i++) {
        console.log("Current Tallest:", tallest)
        console.log("Current Elem:", ar[i])
        if (ar[i] > tallest) {
            maxCount = 1;
            tallest = ar[i]
        } else if (ar[i] === tallest) {
            maxCount += 1
        }
    }
    return maxCount;
}


// console.log(birthdayCakeCandles(arr))
// console.log(birthdayCakeCandles(arr) )
// console.log(otherMethod(arr))
console.log(otherMethod([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))
