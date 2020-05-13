/**
 * Given an integer 'n', create an array such that each value is repeated twice.
 */

 const doubleArr = num => {
     let arr = []
     for (let i = 1; i <= num; i++) {
        arr.push(i);
        arr.push(i);
     }
     return arr
 }

console.log(doubleArr(4) )