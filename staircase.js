const staircase = (n) => {
    let numSteps = 1
    let numSpaces = n - 1;
    for (let i = 0; i < n; i++) {
        let tier = ""
        for (let j = 0; j < numSpaces; j++) {
            tier += ' '
        }

        for (let k = 0; k < numSteps; k++) {
            tier += '#'
        }
        console.log(tier)
        numSpaces -= 1;
        numSteps += 1
    }
}