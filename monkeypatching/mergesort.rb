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
    end
end