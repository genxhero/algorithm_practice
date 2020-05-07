def fibonacci(n)
return [0] if n == 1
    return [0, 1] if n == 2
    result = [0, 1]
while result.length < n 
        result << result[result.length - 1] + result[result.length - 2]
end
result
end
