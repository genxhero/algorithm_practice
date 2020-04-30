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

        let j = 0
        let k = 0;
        let sectionSize = 1;
   
        while (j < result.length) {

            // console.log("Result String: ", result[j], "J:", j, "K", k, "SectionSize: ", sectionSize)
            result[j] += current[k]
                if (sectionSize === longest) {
                    k = 0;
                    sectionSize = 1;
                } else {
                    k++;
                    sectionSize += 1
                }
                j++
            }
    }

return result;

    
}


// console.log(letter_combinations("23")) // Should be  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letter_combinations("234")) 
//Should be 
///          ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi",
//           "bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi",
//           "cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
//Is coming out as
//          ["adg","aeh","afi","bdg","beh","bfi","cdg","ceh","cfi"]