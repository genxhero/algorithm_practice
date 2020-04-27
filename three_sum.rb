def three_sum(array)
    perms = array.permutation(3).to_a
    result = perms.select {|perm| perm.inject(:+) == 0}
end

puts three_sum([-1, 0, 1, 2, -1, -4]).inspect

#Should return...
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]