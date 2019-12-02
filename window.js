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

    for (let i = 0; i < string.length; i++) 
    {
      const firstChar = string[i];
      //i === 1, substring 0, i would be b.
      // substring i + 1 (2) would make it "tt"
      //so otherChar of butt would be btt
      const otherChar = string.substring(0, i) + string.substring(i + 1);
      const otherPermutations = findPermutations(otherChar);

      for (let j = 0; j < otherPermutations.length; j++) {
        results.push(firstChar + otherPermutations[j]);
      }
    }
    return results;
 }

 const stringWithinString = (bigString, smallString) => {
     //Corner case, when inputs get reversed.
     if (bigString.length < smallString.length) {
         return 0;
     }     
     //Corner case, when strings are the same. Maybe es7 will feature one-line return ifs like Ruby?
     if (bigString === smallString) {
         return 1
     }

     const hash = {};
     const permutations = findPermutations(smallString);
     for (let i = 0; i < permutations.length; i++) {
         hash[permutations[i]] = true
     }
     let start = 0;
     let end = smallString.length;
     let count = 0;
     let window;
     while (end < bigString.length + 1) {
        window = bigString.slice(start, end);
        if (hash[window]) {
            count += 1
        } 
        start += 1; 
        end += 1;
     }
     return count;
 }

 console.log(stringWithinString("buttersnugglebuttkoooooobut", "butt")) 