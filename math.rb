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
    return [1] if num == 1
    factorials = factorials_rec(num-1)
    factorials << factorials.last * (num-1)
    factorials
end

def is_prime?(num)
    return false if num == 1
    return true if num == 2
    return false if (2..Math.sqrt(num)).any? { |divisor| num % divisor == 0}
    true
end

def digital_root(num)
    return num if num < 10
    next_thing = digital_root(num / 10) + digital_root(num % 10)
    return next_thing if next_thing < 10
    digital_root(next_thing)
end

def exponent(b, n)
    return 1 if n == 0
    if n > 0
      b * exponent(b, n-1)
    else 1.0/b * exponent(b, n+1)
    end
end

def threesnfives(highnum)
  sum = 0
  (0...highnum).each {|num| sum += num if num % 3 == 0 or num % 5 == 0}
  sum
end

def special_triplet(target)
  (Math.sqrt(target).to_i..target/3).each do |a_side|
    (Math.sqrt(target).to_i..target/2).each do |b_side|
      hypotenuse = Math.sqrt(a_side**2+b_side**2)
      total = a_side+b_side+hypotenuse
      product = a_side*b_side*hypotenuse
      selected = "A: #{a_side} < B: #{b_side} < C: #{hypotenuse.to_i}"
      return "The special triplet is #{selected}. Their product is #{product.to_i}" if (a_side < b_side) && (b_side < hypotenuse) && (total == target)
    end
  end
end

puts threesnfives(10).inspect #23 - original example
puts threesnfives(1000).inspect #233168.  Would be 234168 if we were including 1000 itself.


puts "The first eight fibonacci numbers are: #{fibonacci(8)}"
puts "If you don't see 0, 1, 1, 2, 3, 5, 8, 13 then the code isn't working."
puts "Factorial 4 should be 24.  Result: #{factorial(4)}"
puts "7 is a prime number, so this should return true: #{is_prime?(7)}"
puts "24 is not a prime number, so this should return false: #{is_prime?(24)}"