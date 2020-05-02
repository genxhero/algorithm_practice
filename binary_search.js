/*
    It's Binary Search. Check left 
*/

const  binary_search = (arr, target) => {
     if (arr.length <= 1) {
         return null
     }
     let mid = parseInt(arr.length / 2)
    if (arr[mid] === target) {
        return mid
    }
     if (arr[mid] > target) {
         return binary_search(arr.slice(0, mid), target)
     } else { 
         result = binary_search(arr.slice(mid, arr.length), target)
     }
      return !result ?  null : (mid + result + 1)
}

console.log(binary_search([1, 3, 5, 7, 9], 5))
console.log(binary_search([1, 3, 5, 7, 9], 7))
console.log(binary_search([1, 3, 5, 7, 9], 21))