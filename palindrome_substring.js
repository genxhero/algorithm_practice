const findSubstrings = string => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

const longestPalindromeSubstring = string => {
    const subs = findSubstrings(string);
}

//finds substrings and finds longest palindromics