# A collection of Math based algorithms


def st_rd_th(num)
    arr = num.to_s.split("")
    return "st" if arr.last == "1"
    return "nd" if arr.last == "2" unless arr.last(2) == ["1", "2"]
    return "rd" if arr.last == "3" unless arr.last(2) == ["1", "3"]
    return "th"
end


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

#Without using .digits
def factorial_sum(num)
  num_str = factorial(num).to_s
  num_arr = num_str.split("")
  digits = []
  num_arr.each {|num| digits << num.to_i}
  digi_sum = digits.inject(:+)
end

def generate_factors(num) 
    factors = [1, num]
    dividend = num
   (2...Math.sqrt(num)).each do |divisor|
      if dividend % divisor == 0
        factors << divisor unless factors.include?(divisor)
        factors << dividend/divisor unless factors.include?(dividend/divisor)
      end
        dividend = num
    end
    factors.sort!
end

def largest_prime_factor(num)
    return "That number, #{num}, is prime!" if is_prime?(num) == true
    factors = generate_factors(num)
    prime_factors = []
    factors.each {|factor| prime_factors << factor if is_prime?(factor) == true}
    prime_factors.last
end

def coin_sums(num)
  permies = 0
  num.step(0, -200) {|idx1| 
    idx1.step(0, -100) {|idx2|
      idx2.step(0, -50){|idx3|
        idx3.step(0, -20){|idx4| 
          idx4.step(0, -10){|idx5| 
            idx5.step(0, -5){|idx6| 
              idx6.step(0, -2){|idx7| 
                permies += 1}}}}}}} 
  return permies
end


def fib_of_a_certain_digit(num)
    fibs = [1, 1]
    idx = 1
    while true 
      fib = fibs[idx] + fibs[idx-1]
      fibs << fib
      idx += 1
      digilength = fib.to_s.split("").length
      break if digilength == num
     end
      puts "The first #{num} digit Fibonacci number is at index #{idx}, it's the #{fibs.length}#{st_rd_th(fibs.length)} number in the sequence. "
      puts "Or, using Project Euler's odd choice of phrasing, the index of the first Fibonacci number to have #{num} digits is: #{fibs.length}"
end

puts threesnfives(10).inspect #23 - original example
puts threesnfives(1000).inspect #233168.  Would be 234168 if we were including 1000 itself.


puts "The first eight fibonacci numbers are: #{fibonacci(8)}"
puts "If you don't see 0, 1, 1, 2, 3, 5, 8, 13 then the code isn't working."
puts "Factorial 4 should be 24.  Result: #{factorial(4)}"
puts "7 is a prime number, so this should return true: #{is_prime?(7)}"
puts "24 is not a prime number, so this should return false: #{is_prime?(24)}"