const stickers_for = (phrase) => {
    const arr = phrase.replace(/\s+/g, '').split('')
    let stickersNeeded = 1;
    let charCount = {}
    let maxKey = arr[0];

    for (let i = 0; i < arr.length; i++) {
        charCount[arr[i]] ? charCount[arr[i]] += 1 : charCount[arr[i]] = 1
        if (charCount[maxKey] < charCount[arr[i]] && arr[i] !== ' ') {
            maxKey = arr[i]
        }
    }
    if (charCount[maxKey] > 1) {
        maxKey === 'a' ? stickersNeeded += parseInt(((charCount[maxKey] - 2) / 2)) : stickersNeeded += (charCount[maxKey] - 1)
    }

    return stickersNeeded
}

console.log(stickers_for("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa "));