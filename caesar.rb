#Caesar Cypher - using no %, and no orm.

def caesar(string, offset)
    arr = string.split('')
    result = []
    alphabet = ("a".."z").to_a
    encoded = alphabet.rotate(offset)
    library = {" ": " ", ".": ".", "!": "!", ",": ","}
    alphabet.each_with_index do |letter, i| 
        library[letter] = encoded[i]
    end
    result = arr.map{|el| library[el] }
    result.join('')
end
