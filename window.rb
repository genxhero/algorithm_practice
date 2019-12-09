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
    return 1 if big == small
    hash = {};
    permutations = permutations(small);
    permutations.each {|perm| hash[perm] = true }
    start = 0;
    count = 0;
    finish = small.length;
    while (finish < big.length)
        window = big[start...finish];
        count += 1 if hash[window]
        puts window
        start += 1
        finish += 1
    end
    count
end

puts string_within_string("buttuber", "butt") #should be 2