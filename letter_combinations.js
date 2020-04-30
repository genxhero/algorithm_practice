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
    // for (let i = 0; i < result.length; i++) {
    //     for (let k=0; k < rest.length; k++) {
    //        let current = library[rest[k]]      
    //         for (let j = 0; j < current.length; j++) {
    //             result[j] += current[j]
    //         }    
    //     }
            

    // } 

    for (let i=0; i< rest.length; i++) {
        let current = library[rest[i]]      
        for (let j=0; j < result.length; j++) {
            for (let k = 0; k <current.length; k++ ){
                result[j] += current[k]
            }
        }
    }

return result;

    
}


console.log(letter_combinations("23")) // Should be  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]