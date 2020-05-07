const fibonacci = (n) => {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let result = [0, 1]
    while (result.length < n) {
        result.push(result[result.length - 1] + result[result.length - 2])
    }
    return result

}

