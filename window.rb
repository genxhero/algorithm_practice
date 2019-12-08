 def permutations (string)
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
end