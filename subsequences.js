//Strictly increasing subsequences

const getSubsequences = arr => {
    let subs = [];
    let winSize = 1;
    
    while (winSize <= arr.length) {
        let winStart = 0;
        while ( (winStart + winSize) <= arr.length) {
            subs.push(arr.slice(winStart, winSize + winStart))
            winStart += 1
        }
       winSize += 1
    }
    subs.push([])
    console.log(subs)
    return subs;
}

const getStrictlyIncreasing = arr => {
    let maxLength = 1;
    let maxCount = 0;
    for (let i =0; i < arr.length; i++) {
        const sorted = isSorted(arr[i])
            if (sorted ) {
                if (arr[i].length === maxLength) {
                    maxCount += 1
                } else if (arr[i].length > maxLength) {
                    maxCount = 1;
                    maxLength = arr[i].length
                }
            }
    }
    return `Max Length: ${maxLength}, Count: ${maxCount}`
}

const isSorted = arr => {
    if (arr.length <= 1) {
        return true;
    }
    for (let i=0; i < arr.length; i++) {
       if (arr[i+1] && arr[i] > arr[i + 1] ) {
           return false
       }   
    }
    return true
}


// console.log(getSubsequences([2, 1, 3]))

const subbies = getSubsequences([8, 7, 1, -9, -4, 5, 4,4,-3,8])
//Expected 8 2
console.log(getStrictlyIncreasing(subbies))