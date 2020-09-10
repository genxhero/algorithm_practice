const validate = matrix => {
    //Captures corner cases for incorrectly sized matrices

    for (let i = 0; i < matrix.length; i++) {
        let current = matrix[i].sort((a, b) => a - b)
        console.log(current)
        if (current[0] != 1) {
            return false;
        }
        let test = 2;
        for (let j = 1; j < current.length; j++) {
            // if (j !== current.length-1 && current[j + 1] !== current[j] + 1) 
            if (current[j] != test) {
                return false
            } else {
                test += 1
            }
        }

    }
    return true;
}

//No idea which private tests i am failing.
//Probably edge cases or time complexity.
const checkSubSudoku = matrix => {
    //Edge Case for something other than an array
    if (!Array.isArray(matrix)) {
        return "INVALID";
    }
    // Edge case for empty or mismatched matrix
    if (matrix[0].length !== matrix.length || matrix.length === 0) {
        return "INVALID";
    }
    const flippedMatrix = getColumns(matrix);
    if (validate(flippedMatrix) && validate(matrix)) {
        return "VALID";
    } else {
        return "INVALID"
    }

}

// Subroutine to flip the matrix, get the columns
const getColumns = matrix => {
    let res = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(sub => sub[i]).reverse();
        res.push(row)
    }
    return res;
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]


const otherMatrix = [
['1', '2','3', '4'],
['2', '3', '4', '1'],
['3', '4', '1', '2'],
['4', '1', '2', '3']
]

const edgeCaseOne = [
[1, 2, 3],
[2, 3, 1],
[3, 1, 2]
]
// console.log(matrix)
// console.log(flipMatrix(matrix))
console.log(checkSubSudoku(otherMatrix))
// console.log(checkSubSud =  arr.sortoku(edgeCaseOne))
// const arr = [8, 5, 10, 1, 12, 14, 6, 9, 7]
// const sorted = arr.sort( (a, b) => a > b)
// console.log(sorted)
// console.log(validate(matrix))
