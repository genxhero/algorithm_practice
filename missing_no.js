const missingNumber = (array) => {
    // write your code in JavaScript (Node.js 8.9.4)
    //Edge case: if the biggest number is less than one, return one
    let sorted = array.sort((a, b) => b - a)
    if (sorted[0] <= 0 ) {
        return 1
    }
    
    let hash = {};
    for (let i = 0; i < sorted.length; i++) {
        hash[sorted[i]] = true;
    }
    
    // Iterate over all positive integers betweeen 1 and the biggest number in the array.  An input of [2, 3, 4, 5] should return 1.
    for (let num = 1; num < sorted[0]; num++) {
        if (!hash[num]) {
            return num
          }
    }
  /**
   * If the second loop finds that all integers between the array's min and max
   * Are in the hash, it will return the highest integer plus one.
   */
    return array[0] + 1
}
