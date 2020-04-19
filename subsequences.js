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
    return subs;
}

console.log(getSubsequences([2, 1, 3]))