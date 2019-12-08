 def permutations (string)
    results = [];

    if (string.length == 1) 
    {
      results << string
      return results;
    }

    for ( i = 0; i < string.length; i++) 
    {
       firstChar = string[i];
       otherChar = string[0..i] + string[i + 1];
       otherPermutations = permutations(otherChar);

      for (let j = 0; j < otherPermutations.length; j++) {
        results << (firstChar + otherPermutations[j]);
      }
    }
    results
end