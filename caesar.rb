#Caesar Cypher - using no %, and no orm.

def caesar(string, offset)
    arr = string.split('')
    alphabet = ("a".."z").to_a
    encoded = alphabet.rotate(offset)
    library = {" ": " ", ".": ".", "!": "!", ",": ",", "-", "-"}
    alphabet.each_with_index do |letter, i| 
        library[letter] = encoded[i]
    end
    result = arr.map{|el| library[el] }
    result.join('')
end


puts "First cypher - with an offset of 3, wxyz should be zabc"
puts "Result: #{caesar("wxyz", 3)}"