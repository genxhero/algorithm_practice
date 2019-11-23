def quicksort(arr, first, last)
  if first < last
    index = partition(arr, first, last)
    quicksort(arr, first, index - 1)
    quicksort(arr, index + 1, last)
  end
  arr
end

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

test_arr_a = [4, 1, 10, 6, 7, 2]
puts quicksort(test_arr_a, test_arr_a.first, test_arr_a.last).inspect