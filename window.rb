 def permutations (string)
    results = [];

    if (string.length == 1) 
    {
      results << string
      return results;
    }

    for ( i = 0; i < string.length; i++) 
    {
      const firstChar = string[i];
      const otherChar = string.substring(0, i) + string.substring(i + 1);
      const otherPermutations = findPermutations(otherChar);

      for (let j = 0; j < otherPermutations.length; j++) {
        results.push(firstChar + otherPermutations[j]);
      }
    }
    return results;
end