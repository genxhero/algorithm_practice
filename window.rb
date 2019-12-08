 def permutations (string)
    results = [];

    if (string.length == 1) 
      results << string
      return results;
    end

    (0...string.length).each do |i| 
        first_char = string[i];
        otherChar = string[0...i] + string[(i + 1)..-1];
        otherPermutations = permutations(otherChar);

        (0...otherPermutations.length).each do |j| 
            results << (first_char + otherPermutations[j]);
        end
    end
    results
end

puts permutations("butt").inspect