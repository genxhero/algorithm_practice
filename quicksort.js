/** 
 * The Algorithm that needs no introductions. Recursive quicksort partitions an array around a pivot.
 */

const quicksort = (array, firstIndex, lastIndex) => {
    if (firstIndex < lastIndex) {
        index = partition(array, firstIndex, lastIndex)
        quicksort(array, firstIndex, index - 1)
        quicksort(array, index + 1, lastIndex)
    }
    return array
}

const partition = (array, firstIndex, lastIndex) => {
    let i = firstIndex
    let pivot = array[lastIndex] //Pivot element
    let index = firstIndex 
    while (i < lastIndex) {
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
    array[lastIndex] = temp
    return index
}

let unsorted = [10, 4, 37, 2, 5, 21, 8, 11, 3];
let first = 0;
let last = unsorted.length-1;
console.log(quicksort(unsorted, first, last ));