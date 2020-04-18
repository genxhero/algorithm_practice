const miniMaxSum = (arr) => {
    const sorted = arr.sort();
    const maxSum = arr.slice(-4).reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue
    })
    const minSum = arr.slice(0, 4).reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue
    })

    console.log(minSum, maxSum)

}