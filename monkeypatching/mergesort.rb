class Array
    def merge_sort(&proc)
        return self if self.length < 2
        proc ||= Proc.new {|x, y| x <=> y}
        mid = self.length/2
        left = self.take(mid).merge_sort(&proc)
        right = self.drop(mid).merge_sort(&proc)
        Array.merge(left, right, &proc)
    end

    private 
    def self.merge(left, right, &proc)
        result = [];
        until left.empty? || right.empty?
            case proc.call(left.first, right.first)
            when -1
                result << left.shift
            when 0, 1
                result << right.shift
            end
        end
        result + left + right
    end
end

unsorted = [10, 4, 37, 2, 5, 21, 8, 11, 3]
puts unsorted.merge_sort.inspect