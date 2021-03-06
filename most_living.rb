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



#***************************************************************************************************
#************************************Brute Force Solution O(N*2)************************************
#***************************************************************************************************

def most_living_brut(people)
    years = {}
    (1800..1901).each do |year|
           years[year] = people.select {|person| year.between?(person[:born], person[:died])}.count
    end
    biggest = years.max_by {|k, v| v}
    "The most populous year was #{biggest[0]}, with a total of #{biggest[1]}"
end


#***************************************************************************************************
#******************************Better Solution O(People + Years)************************************
#***************************************************************************************************


def most_living_dry(people)
    start = people.min_by { |k| k[:born] }[:born]
    finish = people.max_by{ |k| k[:born] }[:born]
    years = {}
    (people).each do |person|
        years[person[:born]] ? years[person[:born]][:change] += 1 : years[person[:born]] = {change: 1, population: 0}
        years[person[:died] + 1] ? years[person[:died] +1 ][:change] -= 1 : years[person[:died] +1] = {change: -1, population: 0}
    end
    population = 1
    (start..finish).each do |year|
        if years[year]
            population += years[year][:change] 
            years[year][:population] = population
        end
    end
     res = years.max_by {|k, v| v[:population] } 
    "Year: #{res[0]}, Population: #{res[1][:population]}"
end

#***************************************************************************************************
#******************************Best Solution using Helper Methods***********************************
#***************************************************************************************************

def most_living_helpers(people)
    start = people.min_by { |k| k[:born] }[:born]
    finish = people.max_by{ |k| k[:born] }[:born]
    years = get_years(people)
    years = get_populations(years, start, finish)
    res = years.max_by {|k, v| v[:population] } 
    "Year: #{res[0]}, Population: #{res[1][:population]}"
end

def get_years(people)
    years = {}
    (people).each do |person|
        years[person[:born]] ? years[person[:born]][:change] += 1 : years[person[:born]] = {change: 1, population: 0}
        years[person[:died] + 1] ? years[person[:died] +1 ][:change] -= 1 : years[person[:died] +1] = {change: -1, population: 0}
    end
    years
end

def get_populations(years, start, finish)
    population = 1
    (start..finish).each do |year|
        if years[year]
            population += years[year][:change] 
            years[year][:population] = population
        end
    end
    years
end

# puts most_living_brut(people)
puts most_living_helpers(people)

