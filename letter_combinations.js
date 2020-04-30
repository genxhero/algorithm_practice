/**
 * Hardcore permutations 
 */

const letter_combinations = digits => {
    if (digits === "" ) return []
    const library = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    if (digits.length === 1) return library[digits[0]]
    let result = ['']
    let index = 0
    while (index < digits.length) {
        const next = library[digits[index]]
        const nextResult = []
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < next.length; j++) {
                nextResult.push(result[i] + next[j])
            }
        }
        result = nextResult
        index++
    }
    return result

    
}


// console.log(letter_combinations("23")) // Should be  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letter_combinations("234")) 
//Should be 
///          ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi",
//           "bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi",
//           "cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
//Is coming out as
//          ["adg","aeh","afi","bdg","beh","bfi","cdg","ceh","cfi"]