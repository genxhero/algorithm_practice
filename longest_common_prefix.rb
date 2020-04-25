

def longest_common_prefix(strings)
    result = ""
    shortest = strings.min_by(&:length)
    puts strings.inspect
    puts shortest
    result
end

longest_common_prefix(["flow", "flower", "florist", "flour"]) #Should be "flo"