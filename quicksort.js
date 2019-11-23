const quicksort = (array, firstIndex, lastIndex) => {
    index = partition(array, firstIndex, lastIndex)
    quicksort(array, firstIndex, index - 1)
    quicksort(array, index + 1, lastIndex)

}

const partition = (array, firstIndex, lastIndex) => {
    let i = first
    let pivot = array[last]
    let index = first
    while (i < last) {
        if (array[i] <= pivot) {
            let temp = array[i]
            array[i] = array[index]
            array[index] = temp
            index += 1
        }
    i += 1
}
    temp = array[index]
    array[index] = pivot
    array[last] = temp
    return index
}

let unsorted = [10, 4, 37, 2, 5, 21, 8, 11, 3];
let first = 0;
let last = unsorted.length-1;
console.log(quicksort(unsorted, first, last ));