const lengthOfLongestSubstring = string => {
    const hash = {}
    let start = 0
    let longest = 0
    let arr = string.split('')

    for (idx = 0; idx < string.length; idx++) {
        let current = hash[arr[idx]]
        if (current != null && start <= current) {
            start = current + 1
        } else {
            longest = Math.max(longest, idx - start + 1)
        }

        hash[arr[idx]] = idx
    }
    return longest
};