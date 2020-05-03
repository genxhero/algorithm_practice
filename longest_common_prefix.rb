#longest common prefix, ruby edition.
#Example: "action", "achtung", "actor" would return "ac"

def longest_common_prefix(strings)
    return "" if strings.empty? || strings.all? {|string| string == "" }
    return strings.first if strings.length == 1
    result = ""
    shortest = strings.min_by(&:length)
    puts shortest
    (0...shortest.length).each do |i|
        puts("Shortest: #{shortest} Index: #{i}")
        break if strings.any? {|string| string[i] != shortest[i]}
        result += shortest[i] if strings.all? {|string| string[i] == shortest[i]}
    end
    result
end

puts longest_common_prefix(["aca","cba"]) #Should be ""