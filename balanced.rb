def balanced?(string)
     openers = {"(": ")", "[": "]", "{": "}"};
     closers = {")": "(", "]": "[", "}": "{"};
     return false if closers[string[0]] || string.length < 2 || string.length % 2 != 0  
     stack = []
     string.split('').each do |char|
        stack << char if openers[char]
        if closers[char]
            (stack.last != openers[char] || stack.length == 0) ? return false : stack.pop
        end
     end
     return true
end

puts balanced?("(){}[]")
puts balanced?("][")
puts balanced?("{{[]}}")