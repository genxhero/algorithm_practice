/**
 * Diff between diagonal sums.
 */

const  diagonalDifference = (arr) => {
    const diagA = getTopDownDiagonal(arr)
    const diagB = getBottumUpDiagonal(arr)
    return Math.abs(diagA - diagB)
}

const getTopDownDiagonal = (arr) => {
    let row = 0;
    let col = 0;
    let sum = 0
    while (row < arr.length) {
        sum += arr[row][col]
        row += 1;
        col += 1
    }
    return sum;
}

const getBottumUpDiagonal = (arr) => {
    let row = arr.length - 1;
    let col = 0;
    let sum = 0;
    while (row >= 0) {
        sum += arr[row][col]
        row -= 1;
        col += 1
    }
    return sum;
}