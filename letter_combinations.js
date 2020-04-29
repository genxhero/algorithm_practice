/**
 * Hardcore permutations 
 */

const letter_combinations = digits => {
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

    const firstInitials = library[digits[0]];
    const rest = digits.slice(1).split('')
    let result = [];
    for (let i=0; i < firstInitials.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            result.push(firstInitials[i])
        }
    }
    // console.log(rest)
    for (let i = 0; i < result.length; i++) {
        for (let k=0; k < rest.length; k++) {
           let current = library[rest[k]]      
            for (let j = 0; j < current.length; j++) {
                result[i] += current[j]
            }    
        }
            

    } 

return result;

    
}


console.log(letter_combinations("23")) // Should be  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]