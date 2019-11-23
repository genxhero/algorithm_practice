def quicksort(arr, first, last)
  if first < last
    pivot = partition(arr, first, last)
    quicksort(arr, first, pivot - 1)
    quicksort(arr, pivot + 1, last)
  end

  arr
end

