const birthdayCakeCandles = (ar) => {
    let maxCount = 0;
    let tallest = ar[0]
    for (let i = 0; i < ar.length; i++) {
        if (tallest < ar[i]) {
            maxCount = 1;
            tallest = arr[i]
        } else if (tallest === ar[i]) {
            maxCount += 1
        }
    }

    return maxCount;

}
