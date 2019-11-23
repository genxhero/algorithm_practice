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
    hash = { 0 => "", 1 => "I", 2 => "II", 3 => "III", 4 => "IV", 5 => "IV", 6 => "VI", 7 => "VII", 8 => "VIII", 9 => "IX" }
    hash[integer]
end

def parse_tens(integer)
    hash = { 0 => "", 1 => "X", 2 => "XX", 3 => "XXX", 4 => "XL", 5 => "L", 6 => "LX", 7 => "LXX", 8 => "LXXX", 9 => "XC"}
    hash[integer]
end

def parse_hundreds(integer)
    hash = { 0 => "", 1 => "C", 2 => "CC", 3 => "CCC", 4 => "CD", 5 => "D", 6 => "DC", 7 => "DCC", 8 => "DCCC", 9 => "CM"}
    hash[integer]
end

def parse_thousands(integer)
    hash = {0 => "", 1 => "M", 2 => "MM", 3 => "MMM"}
    hash[integer]
end

puts romanize_number(42)
puts romanize_number(3480)
