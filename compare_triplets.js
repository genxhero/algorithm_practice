const compareTriplets = (a, b) => {
    let aScore = 0;
    let bScore = 0;
    for (let index = 0; index < 3; index++) {
        if (a[index] > b[index]) {
            aScore += 1
        } else if (a[index] < b[index]) {
            bScore += 1
        }
    }
    return [aScore, bScore]
}