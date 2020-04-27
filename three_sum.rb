def three_sum(array)
    perms = array.permutation(3).to_a
    result = [] 
    perms.each do |perm|
        result << perm.sort if !result.include?(perm.sort) && perm.inject(:+) == 0
    end
    result
end

puts three_sum([-1, 0, 1, 2, -1, -4]).inspect

#Should return...
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]