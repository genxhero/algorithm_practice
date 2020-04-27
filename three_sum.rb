def three_sum(array)
    perms = array.permutation(3).map {|perm| perm.sort}
    result = []
    hash = {}
    # result = perms.select {|perm| perm.inject(:+) == 0}
    perms.each do |perm| 
        result << perm if !hash[perm] && perm.inject(:+) == 0
        hash[perm] = true
    end
    result
end

puts three_sum([-1, 0, 1, 2, -1, -4]).inspect
## below case takes too long for leetcode.
 #puts three_sum([0,8,2,-9,-14,5,2,-5,-5,-9,-1,3,1,-8,0,-3,-12,2,11,9,13,-14,2,-15,4,10,9,7,14,-8,-2,-1,-15,-15,-2,8,-3,7,-12,8,6,2,-12,-8,1,-4,-3,5,13,-7,-1,11,-13,8,4,6,3,-2,-2,3,-2,3,9,-10,-4,-8,14,8,7,9,1,-2,-3,5,5,5,8,9,-5,6,-12,1,-5,12,-6,14,3,5,-11,8,-7,2,-12,9,8,-1,9,-1,-7,1,-7,1,14,-3,13,-4,-12,6,-9,-10,-10,-14,7,0,13,8,-9,1,-2,-5,-14]).inspect

#Should return...
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]
