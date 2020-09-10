const subCypher = (message, key) => {
    const library = ["a", "b", "c", "d", "e", "f", 
                     "g", "h", "i", "j", "k", "l", 
                     "m", "n", "o", "p", "q", "r", 
                     "s", "t", "u", "v", "w", "x", 
                     "y", "z"];
    const specials = {
        ",": true,
        ".": true, 
        " ": true, 
        "!": true, 
        "?": true
    };

    const cypher = {};
    let count = 0;
    for (let i = 0; i < key.length; i++) {

        if (count === 26) {
            break;
        }
        let char = key[i];


        if (!cypher[library[i]] && !specials[char]) {
         
            console.log("I", i, "Library[i]:", library[i], "count: ", count)

            cypher[library[i].toUpperCase()] = char.toUpperCase();
            cypher[library[i].toLowerCase()] = char.toLowerCase();
            count += 1;

        
        }
    }

    let res = "";
    for (let c = 0; c < message.length; c++) {
        if (specials[message[c]]) {
            res += message[c]
        } else {
            res += cypher[message[c]]
        }
    }

    return res;

}


const key1 = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!";
const message1 = "It was all a dream.";
const message2 = "Would you kindly?";


console.log(subCypher(message1, key1));

// console.log(subCypher(message2, key1));