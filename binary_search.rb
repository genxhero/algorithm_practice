#Binary search, sorted array, cut off half the array every time, log n time

def binary_search(arr, target)
    return nil if arr.length <= 1
     mid = arr.length / 2
     return mid if arr[mid] == target
     if arr[mid] > target
       return binary_search(arr.take(mid), target)
     else
       result = binary_search(arr.drop(mid + 1), target)
       result.nil? ?  nil : mid + result + 1
     end
end
#procedure: type out above ad nauseum and then comment it out