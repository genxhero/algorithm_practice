def balanced?(string)
     openers = {"(": ")", "[": "]", "{": "}"};
     closers = {")": "(", "]": "[", "}": "{"};
     return false if closers[string[0].to_sym] or string.length < 2 or string.length % 2 != 0  
     stack = []
     string.split('').each do |char|
        stack << char if openers[char.to_sym]
        puts stack.inspect
        if closers[char]
            (stack.last != openers[char.to_sym] || stack.length == 0) ? (return false) : stack.pop
        end
     end
     return true
end

# puts balanced?("(){}[]")
puts balanced?("][")
# puts balanced?("{{[]}}")