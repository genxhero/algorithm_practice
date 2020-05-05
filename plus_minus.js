/**
 * Counts the number of zeroes, positive numbers, and negative numbers - then prints them onscreen
 */


const plusMinus = (arr) => {
    const denominator = arr.length;
    let negatives = 0;
    let zeroes = 0;
    let positives = 0;
    for(let index = 0; index<arr.length; index++) {
        if (arr[index] === 0) { zeroes += 1 }
if (arr[index] > 0) { positives += 1 }
if (arr[index] < 0) { negatives += 1 }
    }
console.log(positives / denominator)
console.log(negatives / denominator)
console.log(zeroes / denominator)
}