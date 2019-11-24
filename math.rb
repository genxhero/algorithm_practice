def fibonacci(n)
end

#Returns the sum of the first n fibonacci numbers
def fibs_sum(n)
    return 0 if n == 0 #base case 1
    return 1 if n == 1 #base case 2
    fibs_sum(n-1) + fibs_sum(n-2) + 1
end