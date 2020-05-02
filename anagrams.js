/**
 * This removes all words that are anagrams of other words inside of an array of strings.
 * 
 * @param {String} text 
 */

const funWithAnagrams = (text) => {

    const newArr = [];
    const wordHash = {}

    for (let i = 0; i < text.length; i++) {
        console.log("text len", text.length, "I:", i)
        let current = text[i]
        if (!wordHash[current.split('').sort().join('')] ) {
            wordHash[current.split('').sort().join('')] = true
            newArr.push(current)
        }
        console.log("Current", current)
        for (let j = i + 1; j < text.length; j++) {
            console.log("current:", current, "testing against", text[j], "j", j)
            current.split('').sort().join('') === text[j].split('').sort().join('')
            if (!current.split('').sort().join('') === text[j].split('').sort().join('')) {
                //  console.log("splicing")
                newArr.push(text[j])
            } 
        }
    }
    return newArr.sort();

}

console.log(funWithAnagrams(["code", "doce", "ecod", 'framer', 'frame']))