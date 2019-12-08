 def permutations (string)
    results = [];

    if (string.length == 1) 
      results << string
      return results;
    end

    (0...string.length).each do |i| 
        first_char = string[i];
        other_char = string[0...i] + string[(i + 1)..-1];
        other_permutations = permutations(other_char);

        (0...other_permutations.length).each do |j| 
            results << (first_char + other_permutations[j]);
        end
    end
    results
end

def string_within_string(big, small)
    return 0 if big.length < small.length
 
end

puts permutations("butt").inspect