people = 
   [ {
        born: 1824,
        died: 1900
    },
    {
        born: 1823,
        died: 1885
    },
    {
        born: 1878,
        died: 1898
    }]




def most_living(people)
    years = {}
    (1800..2000).each do |year|
        years[year] = people.select 
    end
    puts years.inspect
end

most_living(people)