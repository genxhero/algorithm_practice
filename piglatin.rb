def front_letters(word)
 letters = word.split("")
 first_consonants = []
 (0...letters.length).each {|letter| $vowels.include?(letters[letter]) && letters[letter-1] != 'q' ? break : first_consonants << letters[letter]}
 first_sound = first_consonants.join("")
 return first_sound
end

def translate(string)
    words = string.split(" ")
    new_words = []
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E,', "I", 'O', "U"]
    words.each do |word| 
        if $vowels.include?(word[0])
            new_word = "#{word}ay"
            new_words << new_word
        else
         front = front_letters(word)
         middle = word[front.length..word.length]
         new_word = "#{middle}#{front}ay"
         new_words << new_word
        end
    end
translated = new_words.join(" ")
end