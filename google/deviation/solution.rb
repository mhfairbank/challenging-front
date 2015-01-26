def find_deviation(values, length)
  end_index = length - 1
  difference = length - 1
  max_deviation = 0
  while end_index < values.size do
    deviation = values[(end_index - difference)..(end_index)].max - values[(end_index - difference)..(end_index)].min
    max_deviation = deviation if deviation > max_deviation
    end_index += 1
  end
  puts max_deviation
end

test_array = [3,2,7,4,8,5]
length = 4

# expect 7
find_deviation(test_array, length)