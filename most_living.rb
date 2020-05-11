people = 
   [ 
           {
        born: 2000,
        died: 2010
    },
    {
        born: 1975,
        died: 2005
    },
    {
        born: 1975,
        died: 2003
    },
    {
        born: 1803,
        died: 1809
    },
    {
        born: 1750,
        died: 1869
    },
    {
        born: 1840,
        died: 1935
    },
    {
        born: 1803,
        died: 1921
    },
    {
        born: 1894,
        died: 1921
    }
]



#What about in the case of ties?
 #O ^ N*2 I reckon given the select inside of the each loop.

def most_living_brut(people)
    years = {}
    (1800..1901).each do |year|
           years[year] = people.select {|person| year.between?(person[:born], person[:died])}.count
    end
    biggest = years.max_by {|k, v| v}
    "The most populous year was #{biggest[0]}, with a total of #{biggest[1]}"
end


def most_living_dry(people)
    start = people.min_by { |k| k[:born] }[:born]
    finish = people.max_by{ |k| k[:born] }[:born]
    years = {}
    (people).each do |person|
        years[person[:born]] ? years[person[:born]][:change] += 1 : years[person[:born]] = {change: 1}
        years[person[:died] + 1] ? years[person[:died] +1 ][:change] -= 1 : years[person[:died] +1] = {change: -1}
    end
    population = 0
    puts years.inspect
    (years).each do |year| 
        puts "Before checking population in year #{year}"
        population += years[year][:change] 
        puts "Curent year: #{year}, population: #{population}"
        years[year][:population] = population 
    end
    years.inspect
end

# puts most_living_brut(people)
puts most_living_dry(people)