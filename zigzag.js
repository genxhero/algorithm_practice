const zigzag = (s, numRows) => {
    if (numRows === 1) {
        return s;
    }
    let row = 0;
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        arr.push([]);
    }
    let goingDown = true;

    for (let i = 0; i < s.length; i++) {
        arr[row].push(s[i]);
        if (row === numRows - 1) {
            goingDown = false;
        } else if (row === 0) {
            goingDown = true;
        }
        goingDown === true ? row += 1 : row -= 1;
    }

    let consolidated = [];
    for (let i = 0; i < arr.length; i++) {
        consolidated = consolidated.concat(arr[i]);
    }
    return consolidated.join("");
}