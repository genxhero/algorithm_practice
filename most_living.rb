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
    years = {} 
    people.each do |person|
        years[person[:born]] ? years[person[:born] ]+= 1 : years[person[:born]] = 1
    end
    puts years.inspect
end

# puts most_living_brut(people)
most_living_dry(people)