const stickers_for = (phrase) => {
    const arr = phrase.split('')
    let stickersNeeded = 1;
    let charCount = {}
    let maxKey = "i"
    for (let i = 0; i < arr.length; i++) {
        charCount[arr[i]] ? charCount[arr[i]] += 1 : charCount[arr[i]] = 1
        if (charCount[maxKey] < charCount[arr[i]] && arr[i] !== ' ') {
            maxKey = arr[i]
        }
    }
    if (charCount[maxKey] > 1) {
        maxKey === 'a' ? stickersNeeded += ((charCount[maxKey] - 2) / 2) : stickersNeeded += (charCount[maxKey] - 1)
    }
    console.log(stickersNeeded)
}

stickers_for("artisan martians")