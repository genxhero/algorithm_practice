 def permutations (string)
    results = [];

    if (string.length == 1) 
      results << string
      return results;
    end

    (0...string.length).each do |i| 
        firstChar = string[i];
        otherChar = string[0..i] + string[(i + 1)..-1];
        otherPermutations = permutations(otherChar);
        (0...therPermutations.length).each do |j| 
            results << (firstChar + otherPermutations[j]);
        end
    end
    results
end

puts permutations("ba")