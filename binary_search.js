const  binary_search = (arr, target) => {
     if (arr.length <= 1) {
         return null
     }
     let mid = arr.length / 2
    if (arr[mid] === target) {
        return mid
    }
     if (arr[mid] > target) {
         return binary_search(arr.take(mid), target)
     } else { 
         result = binary_search(arr.drop(mid + 1), target)
     }
      return !result ?  null : (mid + result + 1)
}
