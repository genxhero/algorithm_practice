const funWithAnagrams = (text) => {
    const newArr = [];

    for (let i = 0; i < text.length; i++) {
        let current = text[i]
        for (let j = 1; j < text.length - 1; j++) {
            console.log("current:", current, "testing against", text[j])
            current.split('').sort().join('') === text[j].split('').sort().join('')
            if (current.split('').sort().join('') === text[j].split('').sort().join('')) {
                console.log("splicing")
                text.splice(j, 1)
            }
        }
        return text;
    }
}

console.log(funWithAnagrams(["code", "doce", "ecod", 'framer', 'frame']))