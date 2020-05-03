#Longest palindrome

def longest_palindrome(s)
    return "" if s == ""
    return s if s.reverse == s
    arr = s.chars
    s.length.downto(1) do |n|
    longest = arr.each_cons(n).find { |sub| sub == sub.reverse }
    return longest.join if longest
  end
end
