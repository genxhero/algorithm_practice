

def longest_common_prefix(strings)
    result = ""
    shortest = strings.min_by(&:length)
    (0..shortest.length).each do |i|
        result += shortest[i] if strings.all? {|string| string[i] == shortest[i]}
    end
    puts strings.inspect
    puts shortest
    puts result
    result
end

longest_common_prefix(["flow", "flower", "florist", "flour"]) #Should be "flo"