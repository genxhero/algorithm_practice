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

    //Notice: there may be an issue when seven or nine is involved. might need to base second loop below on presence of seven or 9 since that would
    //increase the amount of required first initials from three to four, since it increases the overall combo count

    const firstInitials = library[digits[0]];
    const longest = (digits.includes('7') || digits.includes('9')) ? 4 : 3
    const rest = digits.slice(1).split('')
    let result = [];
    for (let i=0; i < firstInitials.length; i++) {
        for (let j = 0; j < longest; j++) {
            result.push(firstInitials[i])
        }
    }
    console.log(result)
    // for (let i = 0; i < result.length; i++) {
    //     for (let k=0; k < rest.length; k++) {
    //        let current = library[rest[k]]      
    //         for (let j = 0; j < current.length; j++) {
    //             result[j] += current[j]
    //         }    
    //     }
            

    // } 

    for (let i=0; i< rest.length; i++) {
        let current = library[rest[i]]   //[d, e, f]  
        for (let j=0; j < current.length; j++) { // j = 0, current[0] is d
            for (let k = 0; k < result.length; k++ ){
                console.log("Result K:", result[k], "Current J:", current[j])
                result[k] += current[j]
            }
        }
    }

return result;

    
}


console.log(letter_combinations("23")) // Should be  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]