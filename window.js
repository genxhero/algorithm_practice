/**
 * This is the "find how many permutations of a little string are inside of a big string" problem
 * Utilies the "window" solution
 */

 const findPermutations = (string) => {
    const results = [];

    if (string.length === 1) 
    {
      results.push(string);
      return results;
    }

    for (var i = 0; i < string.length; i++) 
    {
      const firstChar = string[i];
      const otherChar = string.substring(0, i) + string.substring(i + 1);
      const otherPermutations = findPermutations(otherChar);

      for (var j = 0; j < otherPermutations.length; j++) {
        results.push(firstChar + otherPermutations[j]);
      }
    }
    return results;
 }

 const stringWithinString = (bigString, smallString) => {
     const hash = {};
     const permutations = findPermutations(smallString)
     
 }

 console.log(findPermutations("yes")) 