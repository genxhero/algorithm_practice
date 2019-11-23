def romanize_number(integer)
    result = ""
    digits = integer.digits.reverse
    length = digits.length
    return result if length == 0
    result += parse_thousands(digits[0]) if length == 4
    result += parse_hundreds(digits[length-3]) if length >= 3
    result += parse_tens(digits[length-2]) if length >= 2
    result += parse_tens(digits[length-1]) if length >= 2
end

def parse_ones(integer)
end

def parse_tens(integer)
end

def parse_hundreds(integer)
end

def parse_thousands(integer)
end