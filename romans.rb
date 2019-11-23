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
    hash = { 0 => "", 1 => "I", 2 => "II", 3 => "III", 4 => "IV", 5 => "IV", 6 => "VI", 7 => "VII", 8 => "VIII", 9 => "IX"}
end

def parse_tens(integer)
end

def parse_hundreds(integer)
end

def parse_thousands(integer)
end