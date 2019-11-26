def fibonacci(n)
    return [0] if n == 1
    return [0, 1] if n == 2
    result = [0, 1]
    while result.length < n 
        result << result[result.length-1] + result[result.length-2]
    end
    result
end

#Returns the sum of the first n fibonacci numbers
def fibonacci_sum(n)
    return 0 if n == 0 #base case 1
    return 1 if n == 1 #base case 2
    fibonacci_sum(n-1) + fibonacci_sum(n-2) + 1
end

#doing this from memory could be wrong
def factorial(num)
    return 1 if num == 0
    (1..num).inject(:*) 
end

def recursive_factorial(num)
    return 1 if num == 0
end

def is_prime?(num)
end


puts "The first eight fibonacci numbers are: #{fibonacci(8)}"
puts "If you don't see 0, 1, 1, 2, 3, 5, 8, 13 then the code isn't working."
puts "Factorial 4 should be 24.  Result: #{factorial(4)}"