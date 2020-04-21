const reverseInteger = x => {
    let result;
    if (x < 0) {
        result = parseInt(`${x}`.split("").reverse().join("")) * -1;
    } else {
        result = parseInt(`${x}`.split("").reverse().join(""));
    }
    if (result > 2147483647 || result < -2147483647) {
        return 0;
    } else {
        return result;
    }
}