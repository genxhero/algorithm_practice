def balanced?(string)
     openers = {"(": ")", "[": "]", "{": "}"};
     closers = {")": "(", "]": "[", "}": "{"};
     return false if closers[string[0]] || string.length < 2 || string.length % 2 !== 0  
     stack = []
     string.split('').each do |char|
     end
end