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
/**To fix by eod: not catching last permutation because it is short circuiting when end === bigString.length */
 const stringWithinString = (bigString, smallString) => {
     const hash = {};
     const permutations = findPermutations(smallString);
     for (let i = 0; i < permutations.length; i++) {
         hash[permutations[i]] = true
     }
     let start = 0;
     let end = smallString.length;
     let count = 0;
     let window;
     while (end < bigString.length) {
        window = bigString.slice(start, end);
        if (hash[window]) {
            count += 1
        } 
        start += 1; 
        end += 1;
     }
     return count;
 }

 console.log(stringWithinString("buttersnugglebuttkooooooobutt", "butt")) 