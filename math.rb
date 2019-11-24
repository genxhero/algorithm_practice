def fibonacci(n)
end

#Returns the sum of the first n fibonacci numbers
def fibonacci_sum(n)
    return 0 if n == 0 #base case 1
    return 1 if n == 1 #base case 2
    fibonacci_sum(n-1) + fibonacci_sum(n-2) + 1
end