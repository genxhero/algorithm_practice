class Array
    def quicksort(arr = self, first = 0, last = self.length-1)
        return self if self.length < 2
        if first < last
            index = partition(arr, first, last)
            self.quicksort(self, first, index - 1)
            self.quicksort(self, index + 1, last)
        end
        self
    end

private
    def partition(arr, first, last)
    pivot = arr[last]
    index = first
    
    i = first
    while i < last
        if arr[i] <= pivot
        temp = arr[i]
        arr[i] = arr[index]
        arr[index] = temp
        index += 1
        end
        i += 1
    end
    temp = arr[index]
    arr[index] = pivot
    arr[last] = temp
    return index
    end

end

unsorted = [10, 4, 37, 2, 5, 21, 8, 11, 3]
puts unsorted.quicksort.inspect