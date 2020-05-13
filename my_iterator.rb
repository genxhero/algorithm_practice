#Given K sorted (ascending) arrays with N elements in each array, implement
#an iterator for iterating over the elements of the arrays in ascending order.
#[[1,5,7], [2,3,10],[4,6,9]] = 1, 2, 3, 4, 5, 6, 7, 8, 9

class MyIterator 

    attr_reader :result 
    def initialize(array)
        @result = [];
        @array = array;
    end

    def iterate
        size = @array.reduce {|accumulator, i| accumulator + i}.length
        size.times do
            self.next
        end
        @result.sort!
    end

    def next
        @result += @array.pop if has_next?
       
    end

    def has_next?
        return false if @array.empty? 
            true 
    end

end

def iterator(matrix)
    combined = []
    matrix.each do |subarray|
        combined += subarray
    end
    combined.sort
end

# puts iterator([[1,5,7], [2,3,10],[4,6,9]]).inspect

iterman = MyIterator.new([[1,5,7], [2,3,10],[4,6,9]])
iterman.iterate
puts iterman.result.inspect